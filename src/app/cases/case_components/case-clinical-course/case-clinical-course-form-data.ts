import { FORM_DATA_TEXTAREA } from '../../../_constants/form-data';
import { FORM_DATA_RADIO, YesNoUnknown } from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsYesNoUnknown = pipe.transform(YesNoUnknown);

export const FORM_DATA_CASE_CLINICAL_COURSE = [
  {
    id: 'conditions',
    title: 'strings.headingHealthConditions',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.cardiovascularDiseaseIncludingHypertension',
        key: 'clinicalCourse.healthConditions.cardiovascularDiseaseIncludingHypertension',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.chronicKidneyDisease',
        key: 'clinicalCourse.healthConditions.chronicKidneyDisease',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.malignancyChemotherapy',
        key: 'clinicalCourse.healthConditions.malignancyChemotherapy',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.diabetes',
        key: 'clinicalCourse.healthConditions.diabetes',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.chronicLiverDisease',
        key: 'clinicalCourse.healthConditions.chronicLiverDisease',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.chronicPulmonaryDisease',
        key: 'clinicalCourse.healthConditions.chronicPulmonaryDisease',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.chronicNeurologicCondition',
        key: 'clinicalCourse.healthConditions.chronicNeurologicCondition',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_TEXTAREA,
        label: 'captions.HealthConditions.otherConditions',
        key: 'clinicalCourse.healthConditions.otherConditions',
        newLine: true,
      },
    ],
  },
];
