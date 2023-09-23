import {SessionDTO} from "./SessionDTO";
import {SmallInstitutionDTO} from "./InstitutionDTO";

export interface SmallClassDTO {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  teacher: string;
  institution : SmallInstitutionDTO;
}
export interface ClassDTO {
  id: number;
  name: string;
  ueCode: string;
  startDate: Date;
  endDate: Date;
  teacher: string;
  program: string;
  terminalCapacities: string;
  sessions: SessionDTO[];
  institution : SmallInstitutionDTO;
}






