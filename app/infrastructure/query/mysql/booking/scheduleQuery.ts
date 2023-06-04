import { ScheduleQueryInterface } from "../../../../application/query/booking/scheduleQueryInterface";
import { ScheduleDTO } from "../../../../application/query/booking/scheduleDTO";
import { sequelize } from "../../../../../config/database";
import { BookedScheduleDTO } from "../../../../application/query/booking/bookedScheduleDTO";

export class ScheduleQuery implements ScheduleQueryInterface {
    
        async getAllSchedule(): Promise<ScheduleDTO[]> {
            try{
                const sql = `SELECT * FROM schedules`;
                const fetchData = sequelize.query(sql);
                return fetchData.then((res: any) => {
                    const data: ScheduleDTO[] = [];
                    if(!res[0]){
                        return data;
                    }
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
                    if(!res[0][0]){
                        return new ScheduleDTO('', '', '', false, '', '');
                    }
                    const isBooked = res[0][0].isBooked === 1 ? true : false;
                    const data: ScheduleDTO = new ScheduleDTO(res[0][0].id, res[0][0].date, res[0][0].time, isBooked, res[0][0].createdAt, res[0][0].updatedAt);
                    return data;
                });
            }
            catch(err){
                throw err;
            }
        }
    
        async getScheduleByTime(time: string): Promise<ScheduleDTO[]> {
            try{
                const sql = `SELECT * FROM schedules WHERE time = ?`;
                const fetchData = sequelize.query(sql, {
                    replacements: [time]
                });
                return fetchData.then((res: any) => {
                    const data: ScheduleDTO[] = [];
                    if(!res[0]){
                        return data;
                    }
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

        async getBookedByDate(date: string): Promise<BookedScheduleDTO[]> {
            try{
                const sql = `SELECT schedules.id, schedules.time
                                FROM schedules
                                LEFT JOIN bookings ON schedules.id = bookings.schedules_id
                                LEFT JOIN transactions ON bookings.transaction_id = transactions.id
                                WHERE DATE(transactions.updatedAt) = :date
                                AND transactions.paid = :paid
                                `;
                const fetchData = sequelize.query(sql, {
                    replacements: {
                        date: date,
                        paid: true
                    }
                });
                return fetchData.then((res: any) => {
                    const data: BookedScheduleDTO[] = [];
                    if(!res[0]){
                        return data;
                    }
                    res[0].forEach((element: any) => {
                        data.push(new BookedScheduleDTO(element.id, element.time));
                    });
                    return data;
                });
            }
            catch(err){
                throw err;
            }
        }
}