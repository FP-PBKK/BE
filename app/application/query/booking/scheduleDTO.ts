export class ScheduleDTO{
    constructor(
        public id: string,
        public date: string,
        public time: string,
        public isBooked: boolean,
        public createdAt: string,
        public updatedAt: string
    ){}
}