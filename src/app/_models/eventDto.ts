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
import { DiseaseTransmissionMode } from './diseaseTransmissionMode';
import { DiseaseVariant } from './diseaseVariant';
import { EventIdentificationSource } from './eventIdentificationSource';
import { EventInvestigationStatus } from './eventInvestigationStatus';
import { EventManagementStatus } from './eventManagementStatus';
import { EventReferenceDto } from './eventReferenceDto';
import { EventSourceType } from './eventSourceType';
import { EventStatus } from './eventStatus';
import { HumanTransmissionMode } from './humanTransmissionMode';
import { InfectionPathCertainty } from './infectionPathCertainty';
import { InstitutionalPartnerType } from './institutionalPartnerType';
import { LocationDto } from './locationDto';
import { MeansOfTransport } from './meansOfTransport';
import { MedicallyAssociatedTransmissionMode } from './medicallyAssociatedTransmissionMode';
import { ParenteralTransmissionMode } from './parenteralTransmissionMode';
import { RiskLevel } from './riskLevel';
import { SormasToSormasOriginInfoDto } from './sormasToSormasOriginInfoDto';
import { SpecificRisk } from './specificRisk';
import { TypeOfPlace } from './typeOfPlace';
import { UserReferenceDto } from './userReferenceDto';
import { WorkEnvironment } from './workEnvironment';
import { YesNoUnknown } from './yesNoUnknown';

export interface EventDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  superordinateEvent?: EventReferenceDto;
  eventStatus: EventStatus;
  riskLevel?: RiskLevel;
  specificRisk?: SpecificRisk;
  eventInvestigationStatus?: EventInvestigationStatus;
  eventInvestigationStartDate?: Date;
  eventInvestigationEndDate?: Date;
  eventManagementStatus?: EventManagementStatus;
  externalId?: string;
  externalToken?: string;
  eventTitle?: string;
  eventDesc: string;
  nosocomial?: YesNoUnknown;
  startDate?: Date;
  endDate?: Date;
  reportDateTime: Date;
  reportingUser: UserReferenceDto;
  evolutionDate?: Date;
  evolutionComment?: string;
  eventLocation?: LocationDto;
  typeOfPlace?: TypeOfPlace;
  meansOfTransport?: MeansOfTransport;
  meansOfTransportDetails?: string;
  connectionNumber?: string;
  travelDate?: Date;
  workEnvironment?: WorkEnvironment;
  srcType?: EventSourceType;
  srcInstitutionalPartnerType?: InstitutionalPartnerType;
  srcInstitutionalPartnerTypeDetails?: string;
  srcFirstName?: string;
  srcLastName?: string;
  srcTelNo?: string;
  srcEmail?: string;
  srcMediaWebsite?: string;
  srcMediaName?: string;
  srcMediaDetails?: string;
  disease?: Disease;
  diseaseDetails?: string;
  diseaseVariant?: DiseaseVariant;
  responsibleUser?: UserReferenceDto;
  typeOfPlaceText?: string;
  reportLat?: number;
  reportLon?: number;
  reportLatLonAccuracy?: number;
  transregionalOutbreak?: YesNoUnknown;
  diseaseTransmissionMode?: DiseaseTransmissionMode;
  infectionPathCertainty?: InfectionPathCertainty;
  humanTransmissionMode?: HumanTransmissionMode;
  parenteralTransmissionMode?: ParenteralTransmissionMode;
  medicallyAssociatedTransmissionMode?: MedicallyAssociatedTransmissionMode;
  epidemiologicalEvidence?: YesNoUnknown;
  epidemiologicalEvidenceDetails?: { [key: string]: boolean };
  laboratoryDiagnosticEvidence?: YesNoUnknown;
  laboratoryDiagnosticEvidenceDetails?: { [key: string]: boolean };
  sormasToSormasOriginInfo?: SormasToSormasOriginInfoDto;
  ownershipHandedOver?: boolean;
  internalToken?: string;
  eventIdentificationSource?: EventIdentificationSource;
  multiDayEvent?: boolean;
}
