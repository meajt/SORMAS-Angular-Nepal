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
import { PeriodDto } from './periodDto';
import { PrescriptionIndexRoute } from './prescriptionIndexRoute';
import { PrescriptionIndexType } from './prescriptionIndexType';

export interface PrescriptionIndexDto {
  uuid?: string;
  prescriptionIndexType?: PrescriptionIndexType;
  prescriptionDate?: Date;
  prescriptionPeriod?: PeriodDto;
  frequency?: string;
  dose?: string;
  prescriptionIndexRoute?: PrescriptionIndexRoute;
  prescribingClinician?: string;
  inJurisdiction?: boolean;
  prescriptionRoute?: string;
  prescriptionType?: string;
}