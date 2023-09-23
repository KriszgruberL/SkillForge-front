import {SessionDTO} from "./SessionDTO";
import {SmallInstitutionDTO} from "./InstitutionDTO";

export interface ClassDTO {
  id: number;
  name: string;
  ueCode: string;
  startDate: Date;
  endDate: Date;
  teacher: string;
  sessions: SessionDTO[];
  institution : SmallInstitutionDTO;
}






