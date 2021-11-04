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
import { CommunityReferenceDto } from './communityReferenceDto';
import { DistrictReferenceDto } from './districtReferenceDto';
import { FacilityReferenceDto } from './facilityReferenceDto';
import { HospitalizationReasonType } from './hospitalizationReasonType';
import { RegionReferenceDto } from './regionReferenceDto';
import { YesNoUnknown } from './yesNoUnknown';

export interface PreviousHospitalizationDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  admissionDate?: Date;
  dischargeDate?: Date;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  community?: CommunityReferenceDto;
  healthFacility?: FacilityReferenceDto;
  healthFacilityDetails?: string;
  isolated?: YesNoUnknown;
  description?: string;
  hospitalizationReason?: HospitalizationReasonType;
  otherHospitalizationReason?: string;
  intensiveCareUnit?: YesNoUnknown;
  intensiveCareUnitStart?: Date;
  intensiveCareUnitEnd?: Date;
}
