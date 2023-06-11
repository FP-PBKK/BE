export class ScheduleModel{
    constructor(
        public id: string,
        public time: string,
        public created_at?: string,
        public updated_at?: string
    ){}

    getDataSchedule(){
        return {
            id: this.id,
            time: this.time,
            created_at: new Date(),
            updated_at: new Date()
        }
    }
}