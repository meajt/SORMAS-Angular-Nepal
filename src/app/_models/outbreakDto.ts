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
import { UserReferenceDto } from './userReferenceDto';

export interface OutbreakDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  district?: DistrictReferenceDto;
  disease?: Disease;
  startDate?: Date;
  endDate?: Date;
  reportingUser?: UserReferenceDto;
  reportDate?: Date;
}
