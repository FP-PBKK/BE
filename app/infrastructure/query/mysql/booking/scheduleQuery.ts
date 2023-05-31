import { ScheduleQueryInterface } from "../../../../application/query/booking/scheduleQueryInterface";
import { ScheduleDTO } from "../../../../application/query/booking/scheduleDTO";
import { sequelize } from "../../../../../config/database";

export class ScheduleQuery implements ScheduleQueryInterface {
    
        async getAllSchedule(): Promise<ScheduleDTO[]> {
            const sql = `SELECT * FROM schedules`;
            const fetchData = sequelize.query(sql);
            return fetchData.then((res: any) => {
                const data: ScheduleDTO[] = [];
                res[0].forEach((element: any) => {
                    data.push(new ScheduleDTO(element.id, element.date, element.time, element.createdAt, element.updatedAt));
                });
                return data;
            });        
        }
    
        async getScheduleById(id: string): Promise<ScheduleDTO> {
            const sql = `SELECT * FROM schedules WHERE id = ?`;
            const fetchData = sequelize.query(sql, {
                replacements: [id]
            });
            return fetchData.then((res: any) => {
                const data: ScheduleDTO = new ScheduleDTO(res[0][0].id, res[0][0].date, res[0][0].time, res[0][0].createdAt, res[0][0].updatedAt);
                return data;
            });
        }
    
        async getScheduleByDateTime(date: string, time: string): Promise<ScheduleDTO[]> {
            const sql = `SELECT * FROM schedules WHERE date = ? AND time = ?`;
            const fetchData = sequelize.query(sql, {
                replacements: [date, time]
            });
            return fetchData.then((res: any) => {
                const data: ScheduleDTO[] = [];
                res[0].forEach((element: any) => {
                    data.push(new ScheduleDTO(element.id, element.date, element.time, element.createdAt, element.updatedAt));
                });
                return data;
            });
        }
}