import { ScheduleQuery } from "../../../infrastructure/query/mysql/booking/scheduleQuery";

export class ScheduleRepository {
    private scheduleQuery: ScheduleQuery;

    constructor() {
        this.scheduleQuery = new ScheduleQuery();
    }

    async getAllSchedule() {
        try{
            return this.scheduleQuery.getAllSchedule();
        }
        catch(err){
            throw err;
        }
    }

    async getScheduleById(id: string) {
        try{
            return this.scheduleQuery.getScheduleById(id);
        }
        catch(err){
            throw err;
        }
    }

    async getScheduleByDateTime(date: string, time: string) {
        try{
            return this.scheduleQuery.getScheduleByDateTime(date, time);
        }
        catch(err){
            throw err;
        }
    }
}