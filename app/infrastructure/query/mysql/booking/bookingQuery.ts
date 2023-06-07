import { BookingQueryInterface } from "../../../../application/query/booking/bookingQueryInterface";
import { BookingDTO } from "../../../../application/query/booking/bookingDTO";
import { sequelize } from "../../../../../config/database";

export class BookingQuery implements BookingQueryInterface {
    async getAllBooking(): Promise<BookingDTO[]> {
        try{
            const bookingSql = `SELECT * FROM bookings
                                ORDER BY createdAt ASC`;
            const bookingFetchData = await sequelize.query(bookingSql);
            const bookingData: BookingDTO[] = [];
            if(!bookingFetchData[0]){
                return bookingData;
            }
            bookingFetchData[0].forEach((element: any) => {
                bookingData.push(new BookingDTO(element.id, element.user_id, element.schedules_id, element.packages_id, element.booking_status));
            });
            return bookingData;
        }
        catch(err){
            throw err;
        }
    }

    async getBookingById(id: string): Promise<BookingDTO> {
        try{
            const sql = `SELECT * FROM bookings WHERE id = :id
                        ORDER BY createdAt ASC`;
            const fetchData = sequelize.query(sql, {
                replacements: {
                    id: id
                }
            });
            return fetchData.then((element: any) => {
                if(!element[0][0]){
                    return new BookingDTO('', '', '', '', '', '');
                }
                return new BookingDTO(element[0][0].id, element[0][0].user_id, element[0][0].schedules_id, element[0][0].packages_id, element[0][0].booking_status);
            });
        }
        catch(err){
            throw err;
        }
    }

    async createBooking(data: any) {
        try{
            const sql = "INSERT INTO bookings (id, user_id, schedules_id, packages_id, booking_status, note, createdAt, updatedAt) VALUES (:id, :user_id, :schedules_id, :packages_id, :booking_status, :note, :createdAt, :updatedAt)";
            const response = sequelize.query(sql, {
                replacements: {
                    id: data.id,
                    user_id: data.user_id,
                    schedules_id: data.schedules_id,
                    packages_id: data.packages_id,
                    booking_status: data.booking_status,
                    note: data.note,
                    createdAt: data.created_at,
                    updatedAt: data.updated_at
                }
            });
            return response.then((res: any) => {
                console.log(res);
                return res[1];
            }); 
        }
        catch(err){
            throw err;
        }
    }
}