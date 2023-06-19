import { BookingQueryInterface } from "../../../../application/query/booking/bookingQueryInterface";
import { BookingDTO } from "../../../../application/query/booking/bookingDTO";
import { sequelize } from "../../../../../config/database";

export class BookingQuery implements BookingQueryInterface {
    async getAllBooking(limit:number, offset:number): Promise<BookingDTO[]> {
        try{
            const bookingSql = `SELECT * FROM bookings
                                ORDER BY createdAt ASC
                                LIMIT :offset , :limit`;
            const bookingFetchData = await sequelize.query(bookingSql, {
                replacements: {
                    limit: limit,
                    offset: offset
                }
            });
            const bookingData: BookingDTO[] = [];
            if(!bookingFetchData[0]){
                return bookingData;
            }
            bookingFetchData[0].forEach((element: any) => {
                bookingData.push(new BookingDTO(element.id, element.user_id, element.schedules_id, element.packages_id, element.booking_status, element.date, element.note, element.createdAt, element.updatedAt));
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
                return new BookingDTO(element[0][0].id, element[0][0].user_id, element[0][0].schedules_id, element[0][0].packages_id, element[0][0].booking_status, element[0][0].date, element[0][0].note, element[0][0].createdAt, element[0][0].updatedAt);
            });
        }
        catch(err){
            throw err;
        }
    }

    async getBookingByUserId(userId: string): Promise<BookingDTO[]> {
        try{
            const sql = `SELECT * FROM bookings WHERE user_id = :user_id
                        ORDER BY createdAt ASC`;
            const fetchData = sequelize.query(sql, {
                replacements: {
                    user_id: userId
                }
            });
            const bookingData: BookingDTO[] = [];
            return fetchData.then((element: any) => {
                if(!element[0][0]){
                    return bookingData;
                }
                element[0].forEach((element: any) => {
                    bookingData.push(new BookingDTO(element.id, element.user_id, element.schedules_id, element.packages_id, element.booking_status, element.date, element.note, element.createdAt, element.updatedAt));
                });
                return bookingData;
            });
        }
        catch(err){
            throw err;
        }
    }

    async createBooking(data: any) {
        try{
            const sql = "INSERT INTO bookings (id, user_id, schedules_id, packages_id, booking_status, date, note, createdAt, updatedAt) VALUES (:id, :user_id, :schedules_id, :packages_id, :booking_status, :date, :note, :createdAt, :updatedAt)";
            const response = sequelize.query(sql, {
                replacements: {
                    id: data.id,
                    user_id: data.user_id,
                    schedules_id: data.schedules_id,
                    packages_id: data.packages_id,
                    booking_status: data.booking_status,
                    date: data.date,
                    note: data.note,
                    createdAt: data.created_at,
                    updatedAt: data.updated_at
                }
            });
            return response.then((res: any) => {
                return res[1];
            }); 
        }
        catch(err){
            throw err;
        }
    }

    async updateBookingStatus(id: string, status: string) {
        try{
            const sql = `UPDATE bookings SET booking_status = :booking_status WHERE id = :id`;
            const response = sequelize.query(sql, {
                replacements: {
                    id: id,
                    booking_status: status,
                    updatedAt: new Date()
                }
            });
            return response.then((res: any) => {
                return res[1].info;
            }); 
        }
        catch(err){
            throw err;
        }
    }

    async updateBookingStatusByQR(qrId: string, status: string) {
        try{
            const sql = `UPDATE bookings
                        LEFT JOIN
                            transactions ON bookings.id = transactions.booking_id
                        SET
                            bookings.booking_status = :booking_status
                        WHERE
                            transactions.qr_id = :qr_id`;
            const response = sequelize.query(sql, {
                replacements: {
                    qr_id: qrId,
                    booking_status: status,
                    updatedAt: new Date()
                }
            });
            return response.then((res: any) => {
                return res[1];
            }); 
        }
        catch(err){
            throw err;
        }
    }
}