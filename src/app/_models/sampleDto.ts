/**
 * SORMAS REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.64.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AdditionalTestType } from './additionalTestType';
import { CaseReferenceDto } from './caseReferenceDto';
import { ContactReferenceDto } from './contactReferenceDto';
import { EventParticipantReferenceDto } from './eventParticipantReferenceDto';
import { FacilityReferenceDto } from './facilityReferenceDto';
import { PathogenTestResultType } from './pathogenTestResultType';
import { PathogenTestType } from './pathogenTestType';
import { SampleMaterial } from './sampleMaterial';
import { SamplePurpose } from './samplePurpose';
import { SampleReferenceDto } from './sampleReferenceDto';
import { SampleSource } from './sampleSource';
import { SamplingReason } from './samplingReason';
import { SormasToSormasOriginInfoDto } from './sormasToSormasOriginInfoDto';
import { SpecimenCondition } from './specimenCondition';
import { UserReferenceDto } from './userReferenceDto';

export interface SampleDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  associatedCase?: CaseReferenceDto;
  associatedContact?: ContactReferenceDto;
  associatedEventParticipant?: EventParticipantReferenceDto;
  labSampleID?: string;
  fieldSampleID?: string;
  sampleDateTime: Date;
  reportDateTime: Date;
  reportingUser: UserReferenceDto;
  reportLat?: number;
  reportLon?: number;
  reportLatLonAccuracy?: number;
  sampleMaterial: SampleMaterial;
  sampleMaterialText?: string;
  samplePurpose: SamplePurpose;
  lab?: FacilityReferenceDto;
  labDetails?: string;
  shipmentDate?: Date;
  shipmentDetails?: string;
  receivedDate?: Date;
  specimenCondition?: SpecimenCondition;
  noTestPossibleReason?: string;
  comment?: string;
  sampleSource?: SampleSource;
  referredTo?: SampleReferenceDto;
  shipped?: boolean;
  received?: boolean;
  pathogenTestResult?: PathogenTestResultType;
  pathogenTestingRequested?: boolean;
  additionalTestingRequested?: boolean;
  requestedPathogenTests?: Array<PathogenTestType>;
  requestedAdditionalTests?: Array<AdditionalTestType>;
  requestedOtherPathogenTests?: string;
  requestedOtherAdditionalTests?: string;
  samplingReason?: SamplingReason;
  samplingReasonDetails?: string;
  sormasToSormasOriginInfo?: SormasToSormasOriginInfoDto;
  ownershipHandedOver?: boolean;
}
