import { ScheduleModel } from "../models/scheduleModel";
import { ScheduleQuery } from "../../../infrastructure/query/mysql/booking/scheduleQuery";
import { generateScheduleId } from "../../../shared/generateId";

export class ScheduleCommand{
    private scheduleQuery: ScheduleQuery;

    constructor() {
        this.scheduleQuery = new ScheduleQuery();
    }

    async createSchedule(time: string) {
        try{
            const id = generateScheduleId(time);
            const scheduleModel = new ScheduleModel(id, time);
            const createScheduleRes = await this.scheduleQuery.createSchedule(scheduleModel.getDataSchedule());
            return createScheduleRes;
        }
        catch(error){
            throw error;
        }        
    }

    async deleteSchedule(id: string) {
        try{
            const deleteScheduleRes = await this.scheduleQuery.deleteSchedule(id);
            return deleteScheduleRes;
        }
        catch(error){
            throw error;
        }
    }
}