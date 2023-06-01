import { BookingQuery } from "../../../infrastructure/query/mysql/booking/bookingQuery";

export class BookingRepository {
    private bookingQuery: BookingQuery;

    constructor(){
        this.bookingQuery = new BookingQuery();
    }

    async getAllBooking(){
        try{
            return await this.bookingQuery.getAllBooking();
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
}