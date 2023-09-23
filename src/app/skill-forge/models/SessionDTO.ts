export interface LocalTime {
  hour: number;
  minute: number;
}

export interface SessionDTO {
  id: number;
  startTime: LocalTime;
  endTime: LocalTime;
}
