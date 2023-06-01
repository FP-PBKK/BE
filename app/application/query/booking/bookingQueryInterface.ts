import { BookingDTO } from "./bookingDTO";

export interface BookingQueryInterface{
    getAllBooking(): Promise<BookingDTO[]>;
}