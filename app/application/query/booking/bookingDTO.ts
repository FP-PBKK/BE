import { UserDTO } from "../user/userDTO";
import { ScheduleDTO } from "./scheduleDTO";
import { PackageDTO } from "./packageDTO";
import { TransactionDTO } from "../transaction/transactionDTO";

export class BookingDTO{
    constructor(
        public id: string,
        public idUser: string,
        public idSchedule: string,
        public idPackage: string,
        public bookingStatus: string,
        public idBookingAddiotionalItem?: string,    
        public user?: UserDTO,
        public schedule?: ScheduleDTO,
        public packagePhoto?: PackageDTO,
        public additionalItem?: any[],
        public transaction?: TransactionDTO,
    ){}
}