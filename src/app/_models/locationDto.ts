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
import { AreaType } from './areaType';
import { CommunityReferenceDto } from './communityReferenceDto';
import { ContinentReferenceDto } from './continentReferenceDto';
import { CountryReferenceDto } from './countryReferenceDto';
import { DistrictReferenceDto } from './districtReferenceDto';
import { FacilityReferenceDto } from './facilityReferenceDto';
import { FacilityType } from './facilityType';
import { PersonAddressType } from './personAddressType';
import { RegionReferenceDto } from './regionReferenceDto';
import { SubcontinentReferenceDto } from './subcontinentReferenceDto';

export interface LocationDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  continent?: ContinentReferenceDto;
  subcontinent?: SubcontinentReferenceDto;
  country?: CountryReferenceDto;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  community?: CommunityReferenceDto;
  details?: string;
  city?: string;
  areaType?: AreaType;
  latitude?: number;
  longitude?: number;
  latLonAccuracy?: number;
  postalCode?: string;
  street?: string;
  houseNumber?: string;
  additionalInformation?: string;
  addressType?: PersonAddressType;
  addressTypeDetails?: string;
  facilityType?: FacilityType;
  facility?: FacilityReferenceDto;
  facilityDetails?: string;
  contactPersonFirstName?: string;
  contactPersonLastName?: string;
  contactPersonPhone?: string;
  contactPersonEmail?: string;
}
