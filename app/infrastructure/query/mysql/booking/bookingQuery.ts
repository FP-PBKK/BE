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

    async getBookingById(id: string): Promise<BookingDTO> {
        try{
            const sql = `SELECT * FROM bookings WHERE id = :id`;
            const fetchData = sequelize.query(sql, {
                replacements: {
                    id: id
                }
            });
            return fetchData.then((element: any) => {
                if(!element[0][0]){
                    return new BookingDTO('', '', '', '', '', '');
                }
                return new BookingDTO(element[0][0].id, element[0][0].user_id, element[0][0].schedules_id, element[0][0].packages_id, element[0][0].booking_statuses_id, element[0][0].transaction_id);
            });
        }
        catch(err){
            throw err;
        }
    }
}