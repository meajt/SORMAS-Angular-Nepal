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
import { ActionPriority } from './actionPriority';
import { ActionStatus } from './actionStatus';
import { Disease } from './disease';
import { DiseaseVariant } from './diseaseVariant';
import { EventIdentificationSource } from './eventIdentificationSource';
import { EventInvestigationStatus } from './eventInvestigationStatus';
import { EventManagementStatus } from './eventManagementStatus';
import { EventStatus } from './eventStatus';
import { RiskLevel } from './riskLevel';
import { UserReferenceDto } from './userReferenceDto';

export interface EventActionIndexDto {
  uuid?: string;
  eventUuid?: string;
  eventTitle?: string;
  eventDisease?: Disease;
  eventDiseaseVariant?: DiseaseVariant;
  eventDiseaseDetails?: string;
  eventIdentificationSource?: EventIdentificationSource;
  eventStartDate?: Date;
  eventEndDate?: Date;
  eventStatus?: EventStatus;
  eventRiskLevel?: RiskLevel;
  eventInvestigationStatus?: EventInvestigationStatus;
  eventManagementStatus?: EventManagementStatus;
  eventReportingUser?: UserReferenceDto;
  eventResponsibleUser?: UserReferenceDto;
  eventEvolutionDate?: Date;
  actionTitle?: string;
  actionCreationDate?: Date;
  actionChangeDate?: Date;
  actionDate?: Date;
  actionStatus?: ActionStatus;
  actionPriority?: ActionPriority;
  actionLastModifiedBy?: UserReferenceDto;
  actionCreatorUser?: UserReferenceDto;
}
