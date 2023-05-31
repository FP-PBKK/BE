import { ScheduleQuery } from "../../../infrastructure/query/mysql/booking/scheduleQuery";

export class ScheduleRepository {
    private scheduleQuery: ScheduleQuery;

    constructor() {
        this.scheduleQuery = new ScheduleQuery();
    }

    async getAllSchedule() {
        return this.scheduleQuery.getAllSchedule();
    }

    async getScheduleById(id: string) {
        return this.scheduleQuery.getScheduleById(id);
    }

    async getScheduleByDateTime(date: string, time: string) {
        return this.scheduleQuery.getScheduleByDateTime(date, time);
    }
}