import { BookingQuery } from "../../../infrastructure/query/mysql/booking/bookingQuery";

export class BookingRepository {
    private bookingQuery: BookingQuery;

    constructor(){
        this.bookingQuery = new BookingQuery();
    }

    async getAllBooking(limit: number, offset: number) {
        try{
            return await this.bookingQuery.getAllBooking(limit, offset);
        }
        catch(err){
            throw err;
        }
    }

    async getBookingById(id: string){
        try{
            return await this.bookingQuery.getBookingById(id);
        }
        catch(err){
            throw err;
        }
    }

    async getBookingByUserId(userId: string){
        try{
            return await this.bookingQuery.getBookingByUserId(userId);
        }
        catch(err){
            throw err;
        }
    }
}