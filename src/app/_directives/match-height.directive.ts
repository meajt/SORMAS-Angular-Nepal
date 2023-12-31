import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  AfterViewInit,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appMatchHeight]',
})
export class MatchHeightDirective implements OnInit, AfterViewInit, OnDestroy {
  @Input() appMatchHeight: any;
  resize$ = new Subject<void>();
  subscriptions: Subscription[] = [];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.resize$
        .pipe(debounceTime(100))
        .subscribe(() => this.matchHeight(this.el.nativeElement, this.appMatchHeight))
    );
  }

  ngAfterViewInit(): void {
    this.matchHeight(this.el.nativeElement, this.appMatchHeight);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.resize$.next();
  }

  matchHeight(parent: HTMLElement, className: string): void {
    if (!parent) {
      return;
    }

    const children = parent.getElementsByClassName(className);

    if (!children) {
      return;
    }

    Array.from(children).forEach((x: any) => {
      // eslint-disable-next-line no-param-reassign
      x.style.height = 'initial';
    });

    const itemHeights = Array.from(children).map((x) => x.getBoundingClientRect().height);

    const maxHeight = itemHeights.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    }, 0);

    Array.from(children).forEach((x: any) => {
      // eslint-disable-next-line no-param-reassign
      x.style.height = `${maxHeight}px`;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
