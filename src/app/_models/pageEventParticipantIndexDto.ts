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
import { EventParticipantIndexDto } from './eventParticipantIndexDto';

export interface PageEventParticipantIndexDto {
  elements?: Array<EventParticipantIndexDto>;
  offset?: number;
  size?: number;
  totalElementCount?: number;
  hasNext?: boolean;
}
