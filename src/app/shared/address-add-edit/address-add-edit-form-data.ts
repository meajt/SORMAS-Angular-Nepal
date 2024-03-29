import { AreaType, PersonAddressType } from '../../_constants/enums';
import { FORM_DATA_INPUT, FORM_DATA_SELECT, FORM_DATA_WIDGET } from '../../_constants/form-data';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsPersonAddressType = pipe.transform(PersonAddressType);
const optionsAreaType = pipe.transform(AreaType);

export const FORM_DATA_ADDRESS_ADD_EDIT = [
  {
    id: 'addressType',
    title: 'captions.Location',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'addressType',
        label: 'captions.Location.addressType',
        options: optionsPersonAddressType,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'addressTypeDetails',
        label: 'captions.Location.addressTypeDetails',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'country.uuid',
        label: 'captions.country',
        service: 'countryService',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'captions.region',
        service: 'regionService',
        determinedBy: [
          {
            key: 'country.uuid',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'captions.district',
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
        label: 'captions.community',
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
    id: 'facility',
    title: 'captions.Facility',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'facilityTypeGroup',
        label: 'captions.Facility.typeGroup',
        service: 'helperService',
        serviceMethod: 'getFacilityCategories',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        label: 'captions.Facility.type',
        service: 'helperService',
        serviceMethod: 'getFacilityTypes',
        validation: ['required'],
        determinedBy: [
          {
            key: 'facilityTypeGroup',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facility',
        label: 'captions.Facility',
        service: 'facilityService',
        fallbackOption: {
          fallbackOptionKey: 'OTHER_FACILITY',
          fallbackOptionValue: 'captions.Facility.OTHER_FACILITY',
        },
        determinedBy: [
          {
            key: 'district.uuid',
          },
          {
            key: 'community.uuid',
            optional: true,
          },
          {
            key: 'facilityTypeGroup',
            keyMap: 'typeGroup',
          },
          {
            key: 'facilityType',
            keyMap: 'type',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthFacilityDetails',
        label: 'captions.CaseData.healthFacilityDetails',
        newLine: true,
        validation: ['required'],
        className: 'size-large',
        dependingOn: 'facility',
        dependingOnValues: ['OTHER_FACILITY'],
      },
    ],
  },
  {
    id: 'addressDetails',
    title: 'headingAddressDetails',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-address-button',
        className: 'push-right',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'street',
        label: 'captions.Location.street',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'city',
        label: 'captions.city',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'houseNumber',
        label: 'captions.Location.houseNumber',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'areaType',
        label: 'captions.Location.areaType',
        options: optionsAreaType,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'postalCode',
        label: 'captions.Location.postalCode',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'additionalInformation',
        label: 'captions.Location.additionalInformation',
      },
    ],
  },
  {
    id: 'gps',
    title: 'headingGps',
    fields: [
      {
        ...FORM_DATA_INPUT,
        label: 'captions.Location.latitude',
        key: 'latitude',
      },
      {
        ...FORM_DATA_INPUT,
        label: 'captions.Location.longitude',
        key: 'longitude',
      },
      {
        ...FORM_DATA_INPUT,
        label: 'captions.Location.latLonAccuracy',
        key: 'latLonAccuracy',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-gps-coords',
        className: 'fullwidth',
        widgetInfo: {
          latitude: 'latitude',
          longitude: 'longitude',
          latLonAccuracy: 'latLonAccuracy',
        },
      },
    ],
  },
  {
    id: 'contact',
    title: 'captions.Contact',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'details',
        label: 'captions.Location.details',
      },
    ],
  },
];
