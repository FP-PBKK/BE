import { ScheduleDTO } from "./scheduleDTO";
import { BookedScheduleDTO } from "./bookedScheduleDTO";

export interface ScheduleQueryInterface{
    getAllSchedule(): Promise<ScheduleDTO[]>;
    getScheduleById(id: string): Promise<ScheduleDTO>;
    getScheduleByTime(time: string): Promise<ScheduleDTO[]>;
    getBookedByDate(date: string): Promise<BookedScheduleDTO[]>;
}