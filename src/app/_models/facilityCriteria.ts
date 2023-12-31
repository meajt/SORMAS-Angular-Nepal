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
import { CountryReferenceDto } from './countryReferenceDto';
import { DistrictReferenceDto } from './districtReferenceDto';
import { EntityRelevanceStatus } from './entityRelevanceStatus';
import { FacilityType } from './facilityType';
import { FacilityTypeGroup } from './facilityTypeGroup';
import { RegionReferenceDto } from './regionReferenceDto';

export interface FacilityCriteria {
  country?: CountryReferenceDto;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  community?: CommunityReferenceDto;
  nameCityLike?: string;
  typeGroup?: FacilityTypeGroup;
  type?: FacilityType;
  relevanceStatus?: EntityRelevanceStatus;
}
