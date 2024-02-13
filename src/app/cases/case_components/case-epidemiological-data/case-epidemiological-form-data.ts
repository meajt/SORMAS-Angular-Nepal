import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { Disease, FORM_DATA_INPUT, FORM_DATA_RADIO, FORM_DATA_SELECT, FORM_DATA_WIDGET, YesNoUnknown } from '../../../app.constants';

const pipe = new EnumToKeyValuePipe();
const optionsYesNoUnknown = pipe.transform(YesNoUnknown);
const optionsDisese = pipe.transform(Disease);



export const FORM_DATA_CASE_EPID_DETAILS = [
  {
    id: 'caseDetection',
    title: '',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'epiData.caseDetectionMethodGroup',
        label: 'Case Detection Method Group',
        options: [
          { key: 'ACTIVE', value: 'Active Case Detection' },
          { key: 'PASSIVE', value: 'Passive Case Detection' },
        ],
        className: 'size-full',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'epiData.caseDetectionMethodActive',
        label: 'Case Detection Method',
        options: [
          { key: 'REFER', value: 'Refer' },
          { key: 'CONTACT_EXAMINATION', value: 'Contact Examination' },
        ],
        className: 'size-full',
        dependingOn: 'epiData.caseDetectionMethodGroup',
        dependingOnValues: ['ACTIVE'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'epiData.caseDetectionMethodPassive',
        label: 'Case Detection Method',
        options: [
          { key: 'VOLUNTARY', value: 'Voluntary' },
          { key: 'HOSPITAL_VISIT_FOR_OTHER_PURPOSE', value: 'Hospital Visit For Other Purpose' },
          { key: 'SURVEY', value: 'Survey' },
          { key: 'LEPROSY_POST_EXPOSURE_PROPHYLAXIS', value: 'Leprosy Post Exposure Prophylaxis' },
        ],
        className: 'size-full',
        dependingOn: 'epiData.caseDetectionMethodGroup',
        dependingOnValues: ['PASSIVE'],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.familyHistoryOfDisease',
        label: 'Family History of Leprosy',
        options: optionsYesNoUnknown,
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.contactExaminationDone',
        label: 'Contact Examination Done',
        options: optionsYesNoUnknown,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'epiData.noOfFamilyContact',
        label: 'No of Family Contact',
        className: 'size-large',
        dependingOn: 'epiData.contactExaminationDone',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'epiData.noOfNeighbourContact',
        label: 'No of Neighbour Contact',
        className: 'size-large',
        dependingOn: 'epiData.contactExaminationDone',
        dependingOnValues: ['YES'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'epiData.noOfSocialContact',
        label: 'No of Social Contact',
        className: 'size-large',
        dependingOn: 'epiData.contactExaminationDone',
        dependingOnValues: ['YES'],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.skinSmearTestPositive',
        label: 'Skin Smear Test Positive',
        options: optionsYesNoUnknown,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.leprosyResult',
        label: 'Leprosy Result',
        options: [
          { key: '1', value: '1+' },
          { key: '2', value: '2+' },
          { key: '3', value: '3+' },
          { key: '4', value: '4+' },
          { key: '5', value: '5+' },
          { key: '6', value: '6+' },
        ],
        className: 'size-large',
        dependingOn: 'epiData.skinSmearTestPositive',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    id: 'exposureInvestigation',
    title: 'strings.headingExposureInvestigation',
    subTitle: 'strings.infoExposureInvestigation',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.exposureDetailsKnown',
        label: 'captions.EpiData.exposureDetailsKnown',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-exposures-list',
        newLine: true,
      },
    ],
  },
  {
    id: 'activity',
    title: 'captions.EpiData.activitiesAsCase',
    subTitle: 'strings.infoActivityAsCaseInvestigation',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.activityAsCaseDetailsKnown',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-activities-list',
        newLine: true,
      },
    ],
  },
  {
    id: 'incubation',
    title: 'EpiData.incubationPeriod',
    subTitle: 'strings.infoEpiDataFieldsHint',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.highTransmissionRiskArea',
        label: 'captions.EpiData.highTransmissionRiskArea',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.largeOutbreaksArea',
        label: 'captions.EpiData.largeOutbreaksArea',
        options: optionsYesNoUnknown,
      },
    ],
  },
  {
    id: 'contacts',
    title: 'EpiData.contactWithSourceCase',
    subTitle: 'strings.infoEpiDataSourceCaseContacts',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'epiData.contactWithSourceCaseKnown',
        label: 'captions.EpiData.contactWithSourceCaseKnown',
        options: optionsYesNoUnknown,
      },
    ],
  },
];
