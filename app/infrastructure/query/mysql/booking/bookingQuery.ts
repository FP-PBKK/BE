import { BookingQueryInterface } from "../../../../application/query/booking/bookingQueryInterface";
import { BookingDTO } from "../../../../application/query/booking/bookingDTO";
import { sequelize } from "../../../../../config/database";

export class BookingQuery implements BookingQueryInterface {
    async getAllBooking(): Promise<BookingDTO[]> {
        try{
            const bookingSql = `SELECT * FROM bookings`;
            const bookingFetchData = await sequelize.query(bookingSql);
            const bookingData: BookingDTO[] = [];
            if(!bookingFetchData[0]){
                return bookingData;
            }
            bookingFetchData[0].forEach((element: any) => {
                bookingData.push(new BookingDTO(element.id, element.user_id, element.schedules_id, element.packages_id, element.booking_statuses_id, element.transaction_id));
            });
            return bookingData;
        }
        catch(err){
            throw err;
        }
    }
}