import { BookingAdditionalItemQuery } from "../../../infrastructure/query/mysql/booking/bookingAdditionalItemQuery";

export class BookingAdditionalItemRepository {
    private bookingAdditionalItemQuery: BookingAdditionalItemQuery;

    constructor(){
        this.bookingAdditionalItemQuery = new BookingAdditionalItemQuery();
    }

    async getBookingAdditionalItemByBookingId(bookingId: string){
        try{
            return await this.bookingAdditionalItemQuery.getBookingAdditionalItemByBookingId(bookingId);
        }
        catch(err){
            throw err;
        }
    }
}