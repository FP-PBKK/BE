import { ScheduleQueryInterface } from "../../../../application/query/booking/scheduleQueryInterface";
import { ScheduleDTO } from "../../../../application/query/booking/scheduleDTO";
import { sequelize } from "../../../../../config/database";

export class ScheduleQuery implements ScheduleQueryInterface {
    
        async getAllSchedule(): Promise<ScheduleDTO[]> {
            try{
                const sql = `SELECT * FROM schedules`;
                const fetchData = sequelize.query(sql);
                return fetchData.then((res: any) => {
                    const data: ScheduleDTO[] = [];
                    res[0].forEach((element: any) => {
                        const isBooked = element.isBooked === 1 ? true : false;
                        data.push(new ScheduleDTO(element.id, element.date, element.time, isBooked, element.createdAt, element.updatedAt));
                    });
                    return data;
                });  
            }
            catch(err){
                throw err;
            }                  
        }
    
        async getScheduleById(id: string): Promise<ScheduleDTO> {
            try{
                const sql = `SELECT * FROM schedules WHERE id = ?`;
                const fetchData = sequelize.query(sql, {
                    replacements: [id]
                });
                return fetchData.then((res: any) => {
                    const isBooked = res[0][0].isBooked === 1 ? true : false;
                    const data: ScheduleDTO = new ScheduleDTO(res[0][0].id, res[0][0].date, res[0][0].time, isBooked, res[0][0].createdAt, res[0][0].updatedAt);
                    return data;
                });
            }
            catch(err){
                throw err;
            }
        }
    
        async getScheduleByDateTime(date: string, time: string): Promise<ScheduleDTO[]> {
            try{
                const sql = `SELECT * FROM schedules WHERE date = ? AND time = ?`;
                const fetchData = sequelize.query(sql, {
                    replacements: [date, time]
                });
                return fetchData.then((res: any) => {
                    const data: ScheduleDTO[] = [];
                    res[0].forEach((element: any) => {
                        const isBooked = element.isBooked === 1 ? true : false;
                        data.push(new ScheduleDTO(element.id, element.date, element.time, isBooked, element.createdAt, element.updatedAt));
                    });
                    return data;
                });
            }
            catch(err){
                throw err;
            }
        }
}