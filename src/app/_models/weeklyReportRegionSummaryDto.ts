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
import { RegionReferenceDto } from './regionReferenceDto';

export interface WeeklyReportRegionSummaryDto {
  uuid?: string;
  region?: RegionReferenceDto;
  officers?: number;
  officerReports?: number;
  officerCaseReports?: number;
  officerZeroReports?: number;
  officerMissingReports?: number;
  officerReportPercentage?: number;
  informants?: number;
  informantReports?: number;
  informantCaseReports?: number;
  informantZeroReports?: number;
  informantMissingReports?: number;
  informantReportPercentage?: number;
}