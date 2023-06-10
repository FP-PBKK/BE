import { BookingQuery } from "../../../infrastructure/query/mysql/booking/bookingQuery";
import { AdditionalItemQuery } from "../../../infrastructure/query/mysql/booking/additionalItemQuery";
import { BookingModel } from "../models/bookingModel";
import { BookingAdditionalItemModel } from "../models/bookingAdditionalItemModel";
import { generateBookingId } from "../../../shared/generateId";

export class BookingCommand{
    private bookingQuery: BookingQuery;
    private additionalItemQuery: AdditionalItemQuery;

    constructor() {
        this.bookingQuery = new BookingQuery();
        this.additionalItemQuery = new AdditionalItemQuery();
    }

    async createBooking(data: any) {
        try{
            data.id = generateBookingId();
            const bookingModel = new BookingModel(data.id, data.id_user, data.id_schedule, data.id_package, data.booking_status, data.date, data.note);
            const createBookingRes = await this.bookingQuery.createBooking(bookingModel.getDataBooking());
            // iterate additional items
            let additionalItemRes = 0;
            if(data.additional_items){
                for(let i = 0; i < data.additional_items.length; i++){
                    const additionalItems = new BookingAdditionalItemModel(data.additional_items[i].quantity, data.id, data.additional_items[i].idItem );
                    const createBookingAdditionalItems = await this.additionalItemQuery.createBookingAdditionalItems(additionalItems.getDataBookingAdditionalItem());
                    additionalItemRes = createBookingAdditionalItems;
                }
            }
            const bookingId = data.id;
            return {bookingId, createBookingRes, additionalItemRes};
        }
        catch(error){
            throw error;
        }        
    }

    async updateBookingStatus(id: string, status: string) {
        try{
            const updateBookingStatusRes = await this.bookingQuery.updateBookingStatus(id, status);
            return updateBookingStatusRes;
        }
        catch(error){
            throw error;
        }
    }

    async updateBookingStatusByQR(qrId: string, status: string) {
        try{
            const updateBookingStatusRes = await this.bookingQuery.updateBookingStatusByQR(qrId, status);
            return updateBookingStatusRes;
        }
        catch(error){
            throw error;
        }
    }
}