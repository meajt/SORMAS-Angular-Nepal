import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import {
  FORM_DATA_DATE,
  FORM_DATA_DATETIME,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_TEXTAREA,
  FORM_DATA_WIDGET,
  TemperatureSource,
  YesNoUnknown
} from '../../../app.constants';

const pipe = new EnumToKeyValuePipe();

const optionsYesNoUnknown = pipe.transform(YesNoUnknown);
const optionsTemperature = [];
const optionsTemperatureSource = pipe.transform(TemperatureSource);
const optionsWeight = [];
const optionsHeight = [];
const optionsArm = [];
const optionsBloodPressure = [];
const optionsRespiratoryRate = [];
const optionsComaScale = [];

for (let i = 35; i < 44.1; i += 0.1) {
  optionsTemperature.push({ key: `${i.toFixed(1)}`, value: `${i.toFixed(1)} °C` });
}

for (let i = 0; i < 500.1; i += 0.1) {
  optionsWeight.push({ key: `${i.toFixed(1)}`, value: `${i.toFixed(1)}` });
}

for (let i = 0; i <= 250; i += 1) {
  optionsHeight.push({ key: i, value: i });
}

for (let i = 0; i <= 100.1; i += 0.1) {
  optionsArm.push({ key: `${i.toFixed(1)}`, value: `${i.toFixed(1)}` });
}

for (let i = 0; i <= 300; i += 1) {
  optionsBloodPressure.push({ key: i, value: i });
}

for (let i = 0; i <= 80; i += 1) {
  optionsRespiratoryRate.push({ key: i, value: i });
}

for (let i = 3; i <= 15; i += 1) {
  optionsComaScale.push({ key: i, value: i });
}

export const FORM_DATA_CLINICAL_COURSE_ADD = [
  {
    id: 'details',
    title: 'headingClinicalDetails',
    fields: [
      {
        ...FORM_DATA_DATETIME,
        key: 'visitDateTime',
        label: 'captions.date',
        timeLabel: 'timeHeading',
        validation: ['required'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'visitingPerson',
        label: 'captions.ClinicalVisit.visitingPerson',
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'visitRemarks',
        label: 'captions.ClinicalVisit.visitRemarks',
        className: 'size-large',
      },
    ],
  },
  {
    id: 'measurements',
    title: 'strings.headingClinicalMeasurements',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'clinicalTypeMeasurement',
        label: 'Type Of Clinical Measurement',
        options: [
          { key: 'DIAGNOSIS', value: 'DIAGNOSIS' },
          { key: 'CONTINUATION', value: 'CONTINUATION' },
          { key: 'RFT', value: 'RFT' },
        ],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'DisabilityGrading',
        label: 'Disability Grading',
        options: [
          { key: '0', value: '0' },
          { key: '1', value: '1' },
          { key: '2', value: '2' },
        ],
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'ulcer',
        label: 'Ulcer',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'EHF Score',
        label: 'EHF Score',
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'leprosyReaction',
        label: 'Leprosy Reaction',
        options: optionsYesNoUnknown,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'leprosyStage',
        label: 'Leprosy Stage',
        options: [
          { key: 'I', value: 'TYPE I' },
          { key: 'II', value: 'TYPE II' },
          { key: 'NEURITIS', value: 'NEURITIS' },
        ],
        className: 'size-large',
        dependingOn: 'leprosyReaction',
        dependingOnValues: ['YES'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'Date Of Diagnosis',
        label: 'Date Of Diagnosis',
        className: 'size-large',
        dependingOn: 'leprosyStage',
        dependingOnValues: ['I', 'II', 'NEURITIS'],
      },

      {
        ...FORM_DATA_INPUT,
        key: 'Treatment',
        label: 'Treatment',
        className: 'size-large',
        dependingOn: 'leprosyStage',
        dependingOnValues: ['I', 'II', 'NEURITIS'],
      },
    ],
  },
  // {
  //   id: 'measurements',
  //   title: 'strings.headingClinicalMeasurements',
  //   fields: [
  //     {
  //       ...FORM_DATA_SELECT,
  //       key: 'temperature',
  //       label: 'captions.Symptoms.temperature',
  //       options: optionsTemperature,
  //     },
  //     {
  //       ...FORM_DATA_SELECT,
  //       key: 'temperatureSource',
  //       label: 'captions.Symptoms.temperatureSource',
  //       options: optionsTemperatureSource,
  //     },
  //     {
  //       ...FORM_DATA_SELECT,
  //       key: 'weight',
  //       label: 'captions.Symptoms.weight',
  //       options: optionsWeight,
  //       newLine: true,
  //     },
  //     {
  //       ...FORM_DATA_SELECT,
  //       key: 'height',
  //       label: 'captions.Symptoms.height',
  //       options: optionsHeight,
  //     },
  //     {
  //       ...FORM_DATA_SELECT,
  //       key: 'midUpperArmCircumference',
  //       label: 'captions.Symptoms.midUpperArmCircumference',
  //       options: optionsArm,
  //     },
  //     {
  //       ...FORM_DATA_SELECT,
  //       key: 'bloodPressureSystolic',
  //       label: 'captions.Symptoms.bloodPressureSystolic',
  //       options: optionsBloodPressure,
  //       newLine: true,
  //     },
  //     {
  //       ...FORM_DATA_SELECT,
  //       key: 'bloodPressureDiastolic',
  //       label: 'captions.Symptoms.bloodPressureDiastolic',
  //       options: optionsBloodPressure,
  //     },
  //     {
  //       ...FORM_DATA_SELECT,
  //       key: 'heartRate',
  //       label: 'captions.Symptoms.heartRate',
  //       options: optionsBloodPressure,
  //       newLine: true,
  //     },
  //     {
  //       ...FORM_DATA_SELECT,
  //       key: 'respiratoryRate',
  //       label: 'captions.Symptoms.respiratoryRate',
  //       options: optionsRespiratoryRate,
  //     },
  //   ],
  // },
  {
    id: 'symptoms',
    title: 'strings.headingSignsAndSymptoms',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-symptoms-group-select',
        widgetInfo: {
          type: 'CLINICAL_COURSE',
        },
      },
    ],
  },
  {
    id: 'general',
    title: 'enum.SymptomGroup.GENERAL',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'chillsSweats',
        label: 'captions.Symptoms.chillsSweats',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'feelingIll',
        label: 'captions.Symptoms.feelingIll',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'fever',
        label: 'captions.Symptoms.fever',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'headache',
        label: 'captions.Symptoms.headache',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'musclePain',
        label: 'captions.Symptoms.musclePain',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'shivering',
        label: 'captions.Symptoms.shivering',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
    ],
  },
  {
    id: 'respiratory',
    title: 'enum.SymptomGroup.RESPIRATORY',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'acuteRespiratoryDistressSyndrome',
        label: 'captions.Symptoms.acuteRespiratoryDistressSyndrome',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'cough',
        label: 'captions.Symptoms.cough',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'difficultyBreathing',
        label: 'captions.Symptoms.difficultyBreathing',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'oxygenSaturationLower94',
        label: 'captions.Symptoms.oxygenSaturationLower94',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'pneumoniaClinicalOrRadiologic',
        label: 'captions.Symptoms.pneumoniaClinicalOrRadiologic',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'rapidBreathing',
        label: 'captions.Symptoms.rapidBreathing',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'respiratoryDiseaseVentilation',
        label: 'captions.Symptoms.respiratoryDiseaseVentilation',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'runnyNose',
        label: 'captions.Symptoms.runnyNose',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'soreThroat',
        label: 'captions.Symptoms.soreThroat',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
    ],
  },
  {
    id: 'respiratory',
    title: 'enum.SymptomGroup.CARDIOVASCULAR',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'fastHeartRate',
        label: 'captions.Symptoms.fastHeartRate',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
    ],
  },
  {
    id: 'gastrointestinal',
    title: 'enum.SymptomGroup.GASTROINTESTINAL',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'diarrhea',
        label: 'captions.Symptoms.diarrhea',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'nausea',
        label: 'captions.Symptoms.nausea',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
    ],
  },
  {
    id: 'other',
    title: 'enum.SymptomGroup.OTHER',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'glasgowComaScale',
        label: 'captions.Symptoms.glasgowComaScale',
        options: optionsComaScale,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'lossOfSmell',
        label: 'captions.Symptoms.lossOfSmell',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'lossOfTaste',
        label: 'captions.Symptoms.lossOfTaste',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'otherNonHemorrhagicSymptoms',
        label: 'captions.Symptoms.otherNonHemorrhagicSymptoms',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'otherNonHemorrhagicSymptomsText',
        label: 'captions.Symptoms.otherNonHemorrhagicSymptomsText',
        dependingOn: 'otherNonHemorrhagicSymptoms',
        dependingOnValues: ['YES'],
        validation: ['required'],
      },
    ],
  },
  {
    id: 'additionalDetails',
    hidden: true,
    title: 'headingAdditionalDetails',
    fields: [
      {
        ...FORM_DATA_TEXTAREA,
        key: 'symptomsComments',
        label: 'captions.Symptoms.symptomsComments',
      },
    ],
  },
];
