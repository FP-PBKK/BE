import { UserDTO } from "../user/userDTO";
import { ScheduleDTO } from "./scheduleDTO";
import { PackageDTO } from "./packageDTO";

export class BookingDTO{
    constructor(
        public id: string,
        public idUser: string,
        public idSchedule: string,
        public idPackage: string,
        public idBookingAddiotionalItem?: string,
        public idTransaction?: string,        
        public user?: UserDTO,
        public schedule?: ScheduleDTO,
        public packagePhoto?: PackageDTO,
    ){}
}