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
import { Disease } from './disease';
import { DistrictReferenceDto } from './districtReferenceDto';
import { RegionReferenceDto } from './regionReferenceDto';

export interface OutbreakCriteria {
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  disease?: Disease;
  active?: boolean;
  activeLower?: Date;
  activeUpper?: Date;
  changeDateAfter?: Date;
  reportedDateFrom?: Date;
  reportedDateTo?: Date;
}
