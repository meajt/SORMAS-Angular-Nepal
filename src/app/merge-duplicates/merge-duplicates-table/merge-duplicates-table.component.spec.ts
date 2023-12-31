import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MergeDuplicatesTableComponent } from './merge-duplicates-table.component';

describe('MergeDuplicatesTableComponent', () => {
  let component: MergeDuplicatesTableComponent;
  let fixture: ComponentFixture<MergeDuplicatesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MergeDuplicatesTableComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot(), MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeDuplicatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
