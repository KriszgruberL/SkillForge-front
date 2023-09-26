import {SessionDTO} from "./SessionDTO";
import {SmallInstitutionDTO} from "./InstitutionDTO";

export interface ListSmallDTO {
  listCourse : SmallClassDTO[],
  count : number,
}

export interface SmallClassDTO {
  id: number;
  name: string;
  result: Result;
  status: Status;
  startDate: Date;
  endDate: Date;
  teacher?: string;
  institution: SmallInstitutionDTO;
}

export interface ClassDTO {
  id: number;
  name: string;
  ueCode?: string;
  result: Result;
  status: Status;
  startDate: Date;
  endDate: Date;
  teacher?: string;
  program?: string;
  terminalCapacities?: string;
  sessions?: SessionDTO[];
  institution: SmallInstitutionDTO;
}

export interface ClassAdd {
  name: string;
  ueCode?: string | null;
  result?: Result | null;
  status: Status;
  startDate: Date;
  endDate: Date;
  teacher?: string | null;
  program?: string | null;
  terminalCapacities?: string | null;
  sessions: SessionDTO[];
  institution: SmallInstitutionDTO;
}

export enum Result {
  FAILED = "Failed",
  PASSED = "Passed",
  SECOND_CHANCE = "Second chance"
}

export enum Status {
  NOT_STARTED = "Not started",
  IN_PROGRESS = "In progress",
  FINISHED = "Finished"

}






