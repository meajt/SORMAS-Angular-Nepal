import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-new-epid-number',
  templateUrl: './new-epid-number.component.html',
  styleUrls: ['./new-epid-number.component.scss'],
})
export class NewEpidNumberComponent {
  config: FormElementBase<string>;
  group: UntypedFormGroup;

  generateEpidNumber(): void {
    this.group.patchValue({ epidNumber: 'test-epid-number' });
  }
}
