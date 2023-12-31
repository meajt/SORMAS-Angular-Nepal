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
import { CaseReferenceDto } from './caseReferenceDto';
import { ContactReferenceDto } from './contactReferenceDto';
import { DateFilterOption } from './dateFilterOption';
import { DistrictReferenceDto } from './districtReferenceDto';
import { EntityRelevanceStatus } from './entityRelevanceStatus';
import { EventReferenceDto } from './eventReferenceDto';
import { PersonReferenceDto } from './personReferenceDto';
import { RegionReferenceDto } from './regionReferenceDto';
import { TaskContext } from './taskContext';
import { TaskStatus } from './taskStatus';
import { TaskType } from './taskType';
import { TravelEntryReferenceDto } from './travelEntryReferenceDto';
import { UserReferenceDto } from './userReferenceDto';

export interface TaskCriteria {
  taskStatus?: TaskStatus;
  taskContext?: TaskContext;
  freeText?: string;
  taskType?: TaskType;
  assigneeUser?: UserReferenceDto;
  excludeAssigneeUser?: UserReferenceDto;
  caze?: CaseReferenceDto;
  contact?: ContactReferenceDto;
  contactPerson?: PersonReferenceDto;
  event?: EventReferenceDto;
  dueDateFrom?: Date;
  dueDateTo?: Date;
  startDateFrom?: Date;
  startDateTo?: Date;
  statusChangeDateFrom?: Date;
  statusChangeDateTo?: Date;
  dateFilterOption?: DateFilterOption;
  relevanceStatus?: EntityRelevanceStatus;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  assigneeUserLike?: string;
  creatorUserLike?: string;
  travelEntry?: TravelEntryReferenceDto;
}
