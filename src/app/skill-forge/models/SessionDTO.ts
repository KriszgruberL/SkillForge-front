export interface LocalTime {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface SessionDTO {
  id: number;
  startTime: LocalTime;
  endTime: LocalTime;
}
