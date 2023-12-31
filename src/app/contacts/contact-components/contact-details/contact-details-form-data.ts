import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import {
  ContactCategory,
  ContactClassification,
  ContactIdentificationSource,
  ContactRelation,
  FORM_DATA_CHECKBOX,
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_NULL,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_TEXTAREA,
  FORM_DATA_WIDGET,
  QuarantineType,
  TracingApp,
  ContactProximity,
  VaccinationInfoSource,
  VaccinationStatus,
  YesNoUnknown,
} from '../../../app.constants';

const pipe = new EnumToKeyValuePipe();
const optionsYesNoUnknown = pipe.transform(YesNoUnknown);
const optionsContactClassification = pipe.transform(ContactClassification);
const optionsContactClassificationOptions = pipe.transform(ContactIdentificationSource);
const optionsTracingApp = pipe.transform(TracingApp);
const optionsContactProximity = pipe.transform(ContactProximity);
const optionsContactCategory = pipe.transform(ContactCategory);
const optionsContactRelation = pipe.transform(ContactRelation);
const optionsQuarantine = pipe.transform(QuarantineType);
const optionsVaccinationStatus = pipe.transform(VaccinationStatus);
const optionsVaccinationSource = pipe.transform(VaccinationInfoSource);

export const FORM_DATA_CONTACT_DETAILS = [
  {
    id: 'caseDetails',
    title: 'strings.entityCase',
    anchor: 'contact_data',
    anchorLabel: 'strings.headingContactData',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-contact-case-details',
        className: 'fullwidth',
        key: 'caze',
      },
    ],
  },
  {
    id: 'contactId',
    title: 'captions.Contact.uuid',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'uuid',
      },
    ],
  },
  {
    id: 'surveillanceReport',
    title: 'captions.SurveillanceReport',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'reportDateTime',
        label: 'enum.ContactDateType.REPORT_DATE',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'reportingDistrict.caption',
        label: 'captions.Contact.reportingDistrict',
        options: [
          {
            key: 'default',
            value: 'defaultDistrict',
          },
        ],
      },
    ],
  },
  {
    id: 'contactClassification',
    title: 'captions.Contact.contactClassification',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'contactClassification',
        options: optionsContactClassification,
      },
    ],
  },
  {
    id: 'contactStatus',
    title: 'captions.Contact.contactStatus',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'contactStatus',
      },
    ],
  },
  {
    id: 'contactDetails',
    title: 'strings.entityContact',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'multiDayContact',
        label: 'captions.Contact.multiDayContact',
      },
      {
        ...FORM_DATA_DATE,
        key: 'firstContactDate',
        label: 'captions.Contact.firstContactDate',
        dependingOn: 'multiDayContact',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'lastContactDate',
        label: 'captions.Contact.lastContactDate',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        newLine: true,
        label: 'captions.Contact.cazeDisease',
        options: [
          {
            key: 'default',
            value: 'defaultDisease',
          },
        ],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'returningTraveler',
        label: 'captions.Contact.returningTraveler',
        options: optionsYesNoUnknown,
        newLine: true,
      },
    ],
  },
  {
    id: 'externalData',
    title: 'CaseData.externalData',
    anchor: 'additional_information',
    anchorLabel: 'CaseData.additionalInfo',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'externalID',
        label: 'captions.Contact.externalID',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalToken',
        label: 'captions.Contact.externalToken',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'internalToken',
        label: 'captions.Contact.internalToken',
        newLine: true,
      },
    ],
  },
  {
    id: 'location',
    title: 'captions.Location',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'captions.Contact.region',
        options: [],
        service: 'regionService',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'captions.Contact.district',
        options: [],
        service: 'districtService',
        determinedBy: [
          {
            key: 'region.uuid',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        label: 'captions.Contact.community',
        options: [],
        service: 'communityService',
        determinedBy: [
          {
            key: 'district.uuid',
          },
        ],
      },
    ],
  },
  {
    id: 'contactType',
    title: 'Contact.typeOfContact',
    subtitle: 'Contact.pickClosest',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'contactIdentificationSource',
        label: 'captions.Contact.contactIdentificationSource',
        options: optionsContactClassificationOptions,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'tracingApp',
        label: 'captions.Contact.tracingApp',
        options: optionsTracingApp,
        dependingOn: 'contactIdentificationSource',
        dependingOnValues: ['TRACING_APP'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'tracingAppDetails',
        label: 'captions.Contact.tracingAppDetails',
        newLine: true,
        dependingOn: 'tracingApp',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_RADIO,
        key: 'contactType',
        options: optionsContactProximity,
        className: 'medium-text-radio',
        newLine: true,
        radioNewLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'contactProximityDetails',
        label: 'captions.Contact.contactProximityDetails',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'contactCategory',
        label: 'captions.Contact.contactCategory',
        options: optionsContactCategory,
        newLine: true,
      },
    ],
  },
  {
    id: 'contactDescription',
    title: 'Contact.descriptionShort',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'relationToCase',
        label: 'captions.Contact.relationToCase',
        options: optionsContactRelation,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'relationDescription',
        label: 'captions.Contact.relationDescription',
        dependingOn: 'relationToCase',
        dependingOnValues: ['OTHER'],
        newLine: true,
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'description',
        label: 'captions.Contact.description',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'highPriority',
        label: 'captions.Contact.highPriority',
        newLine: true,
      },
    ],
  },
  {
    id: 'medicallyActive',
    title: 'Medical',
    fields: [
      {
        ...FORM_DATA_RADIO,
        label: 'captions.Contact.careForPeopleOver60',
        key: 'careForPeopleOver60',
        options: optionsYesNoUnknown,
      },
    ],
  },
  {
    id: 'work',
    title: 'CaseData.work',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'prohibitionToWork',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_DATE,
        key: 'prohibitionToWorkFrom',
        label: 'captions.Contact.prohibitionToWorkFrom',
        dependingOn: 'prohibitionToWork',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'prohibitionToWorkUntil',
        label: 'captions.Contact.prohibitionToWorkUntil',
        dependingOn: 'prohibitionToWork',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    id: 'quarantine',
    title: 'captions.Contact.quarantine',
    fields: [
      {
        ...FORM_DATA_RADIO,
        label: 'captions.Contact.quarantineHomePossible',
        key: 'quarantineHomePossible',
        options: optionsYesNoUnknown,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHomePossibleComment',
        label: 'captions.Contact.quarantineHomePossibleComment',
        dependingOn: 'quarantineHomePossible',
        dependingOnValues: ['NO'],
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.Contact.quarantineHomeSupplyEnsured',
        key: 'quarantineHomeSupplyEnsured',
        options: optionsYesNoUnknown,
        dependingOn: 'quarantineHomePossible',
        dependingOnValues: ['YES'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHomeSupplyEnsuredComment',
        label: 'captions.Contact.quarantineHomeSupplyEnsuredComment',
        dependingOn: 'quarantineHomeSupplyEnsured',
        dependingOnValues: ['NO'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'quarantine',
        label: 'captions.Contact.quarantine',
        options: optionsQuarantine,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineFrom',
        label: 'captions.Contact.quarantineFrom',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineTo',
        label: 'captions.Contact.quarantineTo',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineTypeDetails',
        label: 'captions.Contact.quarantineTypeDetails',
        dependingOn: 'quarantine',
        dependingOnValues: ['OTHER'],
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'quarantineOrderedVerbally',
        label: 'captions.Contact.quarantineOrderedVerbally',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineOrderedVerballyDate',
        label: 'captions.Contact.quarantineOrderedVerballyDate',
        dependingOn: 'quarantineOrderedVerbally',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'quarantineOrderedOfficialDocument',
        label: 'captions.Contact.quarantineOrderedOfficialDocument',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineOrderedOfficialDocumentDate',
        label: 'captions.Contact.quarantineOrderedOfficialDocumentDate',
        dependingOn: 'quarantineOrderedOfficialDocument',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'quarantineOfficialOrderSent',
        label: 'captions.Contact.quarantineOfficialOrderSent',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'quarantineOfficialOrderSentDate',
        label: 'captions.Contact.quarantineOfficialOrderSentDate',
        dependingOn: 'quarantineOfficialOrderSent',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'quarantineHelpNeeded',
        label: 'captions.Contact.quarantineHelpNeeded',
        dependingOn: 'quarantine',
        dependingOnValues: ['HOME', 'INSTITUTIONELL'],
        newLine: true,
      },
    ],
  },
  {
    id: 'preExistingConditions',
    title: 'strings.headingHealthConditions',
    fields: [
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.currentSmoker',
        key: 'currentSmoker',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.hepatitis',
        key: 'hepatitis',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio margin-left-50',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.formerSmoker',
        key: 'formerSmoker',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.chronicLiverDisease',
        key: 'chronicLiverDisease',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio margin-left-50',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.obesity',
        key: 'obesity',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.asplenia',
        key: 'asplenia',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio margin-left-50',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.cardiovascularDiseaseIncludingHypertension',
        key: 'cardiovascularDiseaseIncludingHypertension',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.chronicNeurologicCondition',
        key: 'chronicNeurologicCondition',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.chronicHeartFailure',
        key: 'chronicHeartFailure',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.sickleCellDisease',
        key: 'sickleCellDisease',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio margin-left-50',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.diabetes',
        key: 'diabetes',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.downSyndrome',
        key: 'downSyndrome',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio margin-left-50',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.asthma',
        key: 'asthma',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.malignancyChemotherapy',
        key: 'malignancyChemotherapy',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio margin-left-50',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.tuberculosis',
        key: 'tuberculosis',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.congenitalSyphilis',
        key: 'congenitalSyphilis',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio margin-left-50',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.chronicPulmonaryDisease',
        key: 'chronicPulmonaryDisease',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.hiv',
        key: 'hiv',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio margin-left-50',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.chronicKidneyDisease',
        key: 'chronicKidneyDisease',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.immunodeficiencyOtherThanHiv',
        key: 'immunodeficiencyOtherThanHiv',
        options: optionsYesNoUnknown,
        className: 'medium-text-radio margin-left-50',
      },
      {
        ...FORM_DATA_TEXTAREA,
        label: 'captions.HealthConditions.otherConditions',
        key: 'additionalDetails',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.Contact.immunosuppressiveTherapyBasicDisease',
        key: 'immunosuppressiveTherapyBasicDisease',
        options: optionsYesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        label: 'captions.Contact.immunosuppressiveTherapyBasicDiseaseDetails',
        key: 'immunosuppressiveTherapyBasicDiseaseDetails',
        options: optionsYesNoUnknown,
        dependingOn: 'immunosuppressiveTherapyBasicDisease',
        dependingOnValues: ['YES'],
        newLine: true,
      },
    ],
  },
  {
    id: 'vaccination',
    title: 'vaccination',
    fields: [
      {
        ...FORM_DATA_SELECT,
        label: 'captions.VaccinationInfo.vaccinationStatus',
        key: 'vaccinationInfo.vaccination',
        options: optionsVaccinationStatus,
      },
      {
        ...FORM_DATA_SELECT,
        label: 'captions.VaccinationInfo.vaccinationDoses',
        key: 'vaccinationInfo.vaccinationDoses',
        dependingOn: 'vaccinationInfo.vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'vaccinationInfo.firstVaccinationDate',
        label: 'captions.VaccinationInfo.firstVaccinationDate',
        dependingOn: 'vaccinationInfo.vaccination',
        dependingOnValues: ['VACCINATED'],
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'vaccinationInfo.lastVaccinationDate',
        label: 'captions.VaccinationInfo.lastVaccinationDate',
        dependingOn: 'vaccinationInfo.vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccinationInfo.vaccinationInfoSource',
        label: 'captions.VaccinationInfo.vaccinationInfoSource',
        dependingOn: 'vaccinationInfo.vaccination',
        dependingOnValues: ['VACCINATED'],
        options: optionsVaccinationSource,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccinationInfo.vaccineName',
        label: 'captions.VaccinationInfo.vaccineName',
        dependingOn: 'vaccinationInfo.vaccination',
        dependingOnValues: ['VACCINATED'],
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccinationInfo.vaccineManufacturer',
        label: 'captions.VaccinationInfo.vaccineManufacturer',
        dependingOn: 'vaccinationInfo.vaccination',
        dependingOnValues: ['VACCINATED'],
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccinationInfo.vaccineInn',
        label: 'captions.VaccinationInfo.vaccineInn',
        dependingOn: 'vaccinationInfo.vaccination',
        dependingOnValues: ['VACCINATED'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccinationInfo.vaccineBatchNumber',
        label: 'captions.VaccinationInfo.vaccineBatchNumber',
        dependingOn: 'vaccinationInfo.vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccinationInfo.vaccineUniiCode',
        label: 'captions.VaccinationInfo.vaccineUniiCode',
        dependingOn: 'vaccinationInfo.vaccination',
        dependingOnValues: ['VACCINATED'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccinationInfo.vaccineAtcCode',
        label: 'captions.VaccinationInfo.vaccineAtcCode',
        dependingOn: 'vaccinationInfo.vaccination',
        dependingOnValues: ['VACCINATED'],
      },
    ],
  },
  {
    id: 'followupStatus',
    title: '',
    required: false,
    anchor: 'followup_status',
    anchorLabel: 'captions.CaseData.followUpStatus',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-follow-up-status',
        key: 'followUpStatus',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'followUpUntil',
        label: 'captions.CaseData.followUpUntil',
        className: 'size-medium follow-up-date',
        dependingOn: 'followUpStatus',
        dependingOnValues: ['FOLLOW_UP', 'CANCELED', 'LOST', 'COMPLETED'],
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'expectedFollowUpUntil',
        label: 'captions.CaseData.expectedFollowUpUntil',
        className: 'size-medium follow-up-date',
        dependingOn: 'followUpStatus',
        dependingOnValues: ['FOLLOW_UP', 'CANCELED', 'LOST', 'COMPLETED'],
        disabled: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'overwriteFollowUpUntil',
        label: 'captions.CaseData.overwriteFollowUpUntil',
        dependingOn: 'followUpStatus',
        dependingOnValues: ['FOLLOW_UP', 'CANCELED', 'LOST', 'COMPLETED'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'followUpComment',
        label: 'captions.CaseData.followUpComment',
        newLine: true,
        className: 'size-full',
      },
    ],
  },
  {
    id: 'contactOfficer',
    anchor: 'general_comment',
    anchorLabel: 'captions.Contact.additionalDetails',
    title: '',
    fields: [
      {
        ...FORM_DATA_SELECT,
        label: 'captions.Contact.contactOfficer',
        key: 'contactOfficer.uuid',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_TEXTAREA,
        label: 'captions.Contact.additionalDetails',
        key: 'additionalDetails',
        newLine: true,
      },
    ],
  },
];
