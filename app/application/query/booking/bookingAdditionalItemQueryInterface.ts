import { BookingAdditionalItem } from "./bookingAdditionalItemDTO";

export interface BookingAdditionalItemQueryInterface{
    getBookingAdditionalItemByBookingId(bookingId: string): Promise<BookingAdditionalItem[]>;
}