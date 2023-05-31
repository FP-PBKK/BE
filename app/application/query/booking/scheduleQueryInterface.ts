import { ScheduleDTO } from "./scheduleDTO";

export interface ScheduleQueryInterface{
    getAllSchedule(): Promise<ScheduleDTO[]>;
    getScheduleById(id: string): Promise<ScheduleDTO>;
    getScheduleByDateTime(date: string, time: string): Promise<ScheduleDTO[]>;
}