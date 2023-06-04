import { ScheduleRepository } from '../repository/scheduleRepository';

export class ScheduleService{
    private scheduleRepository: ScheduleRepository;

    constructor(){
        this.scheduleRepository = new ScheduleRepository();
    }

    async getBookedScheduleByDate(date: string){
        try{
            //get all schedule
            const allSchedule = await this.scheduleRepository.getAllSchedule();
            //get booked schedule
            const bookedSchedule = await this.scheduleRepository.getBookedScheduleByDate(date);
            let returnData: any[] = [];
            //compare and return
            allSchedule.forEach((schedule: any) => {
                let isBooked = false;
                bookedSchedule.forEach((booked: any) => {
                    if(schedule.id == booked.scheduleId){
                        isBooked = true;
                    }
                });
                returnData.push({
                    id: schedule.id,
                    time: schedule.time,
                    isBooked: isBooked
                });
            })
            return returnData;
        }
        catch(err){
            throw err;
        }
    }
}