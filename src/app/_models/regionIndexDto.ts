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
import { AreaReferenceDto } from './areaReferenceDto';
import { CountryReferenceDto } from './countryReferenceDto';

export interface RegionIndexDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  name?: string;
  epidCode?: string;
  population?: number;
  growthRate?: number;
  externalID?: string;
  area?: AreaReferenceDto;
  country?: CountryReferenceDto;
}