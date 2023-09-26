import {ClassDTO} from "./ClassDTO";
import {OnlineClassDTO} from "./OnlineClassDTO";

export interface LocalTime {
  hour: number;
  minute: number;
}


export interface SessionDTO {
  id: number;
  startTime: LocalTime;
  endTime: LocalTime;
  class? : ClassDTO;
  onlineClass? : OnlineClassDTO;
}
