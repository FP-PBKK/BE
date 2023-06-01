import { BookingAdditionalItemQueryInterface } from "../../../../application/query/booking/bookingAdditionalItemQueryInterface";
import { BookingAdditionalItemDTO } from "../../../../application/query/booking/bookingAdditionalItemDTO";
import { sequelize } from "../../../../../config/database";

export class BookingAdditionalItemQuery implements BookingAdditionalItemQueryInterface {
    async getBookingAdditionalItemByBookingId(bookingId: string): Promise<BookingAdditionalItemDTO[]> {
        try {
            const sql = `SELECT bookingadditionalitems.id, bookingadditionalitems.booking_id, bookingadditionalitems.additional_item_id, bookingadditionalitems.quantity, additionalitems.name, additionalitems.price
                FROM bookingadditionalitems
                INNER JOIN additionalitems ON bookingadditionalitems.additional_item_id = additionalitems.id
                WHERE bookingadditionalitems.booking_id = :bookingId`;
            const fetchData = await sequelize.query(sql, {
                replacements: {
                    bookingId: bookingId
                }
            });
            const data: BookingAdditionalItemDTO[] = [];
            if(!fetchData){
                return data;
            }
            fetchData[0].forEach((item: any) => {
                data.push(new BookingAdditionalItemDTO(
                    item.additional_item_id,
                    item.quantity,
                    item.name,
                    item.price
                ));
            });
            return data;            
        }
        catch (err) {
            throw err;
        }
    }
}