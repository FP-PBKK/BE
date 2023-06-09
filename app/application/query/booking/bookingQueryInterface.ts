import { BookingDTO } from "./bookingDTO";

export interface BookingQueryInterface{
    getAllBooking(limit:number, offset:number): Promise<BookingDTO[]>;
    getBookingById(id: string): Promise<BookingDTO>;
    getBookingByUserId(userId: string): Promise<BookingDTO[]>;
    createBooking(data: any);
    updateBookingStatus(id: string, status: string);
    updateBookingStatusByQR(qrId: string, status: string);
}