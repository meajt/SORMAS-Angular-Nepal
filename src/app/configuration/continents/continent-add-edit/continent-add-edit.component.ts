import { Component, Input, OnInit } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { ContinentDto } from '../../../_models/continentDto';
import * as data from './continent-add-edit-form-data';
import { ContinentService } from '../../../_services/api/continent.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';

@Component({
  selector: 'app-continent-add-edit',
  templateUrl: './continent-add-edit.component.html',
  styleUrls: ['./continent-add-edit.component.scss'],
})
export class ContinentAddEditComponent implements OnInit {
  @Input() selectedResource: ContinentDto;
  myFormElements: FormBase<any>[] = [];

  constructor(
    public continentService: ContinentService,
    private formElementControlService: FormElementControlService
  ) {}

  ngOnInit(): void {
    this.continentService.getAll(null, null, null, true).subscribe({
      next: (response: any) => {
        if (this.selectedResource) {
          this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
            this.selectedResource,
            JSON.parse(JSON.stringify(data.FORM_DATA_CONTINENT_ADD_EDIT))
          );
          this.myFormElements = this.formElementControlService.setAttributeToFormElement(
            this.myFormElements,
            'continent.uuid',
            'disabled',
            true
          );
        } else {
          this.myFormElements = JSON.parse(JSON.stringify(data.FORM_DATA_CONTINENT_ADD_EDIT));
        }
        this.myFormElements = this.formElementControlService.setOptionsToInput(
          response.elements,
          this.myFormElements,
          'continent.uuid',
          'defaultName'
        );
      },
      error: () => {},
      complete: () => {},
    });
  }
}