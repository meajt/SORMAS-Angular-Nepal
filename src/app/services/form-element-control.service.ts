import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormElementBase } from '../shared/dynamic-form/types/form-element-base';

const MAX_AGE = 100;
const MIN_PASS_LENGTH = 8;

@Injectable({
  providedIn: 'root',
})
export class FormElementControlService {
  toFormGroup = (formElements: FormElementBase<string>[]) => {
    const group: { [key: string]: FormControl } = {};
    let validations: ValidatorFn[] = [];
    formElements.forEach((formElement) => {
      if (formElement.validation?.includes('required')) {
        validations.push(Validators.required);
      }
      if (formElement.validation?.includes('email')) {
        validations.push(Validators.email);
      }
      if (formElement.validation?.includes('age')) {
        validations.push(Validators.max(MAX_AGE));
      }
      if (formElement.validation?.includes('password')) {
        validations.push(Validators.minLength(MIN_PASS_LENGTH));
      }
      group[formElement.key] =
        validations.length > 0
          ? (group[formElement.key] = new FormControl(formElement.value || '', validations))
          : (group[formElement.key] = new FormControl(formElement.value || ''));
      validations = [];
    });
    return new FormGroup(group);
  };
}
