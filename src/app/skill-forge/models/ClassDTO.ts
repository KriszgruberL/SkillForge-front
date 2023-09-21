import {SessionDTO} from "./SessionDTO";

export interface ClassDTO {
  id: number;
  name: string;
  ueCode: string;
  startDate: Date;
  endDate: Date;
  teacher: string;
  sessions: SessionDTO[];
  institutionID : number;
}






