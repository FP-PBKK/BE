export class BookingAdditionalItemModel{
    constructor(
        public quantity: number,
        public booking_id: string,
        public additional_item_id: string,
        public created_at?: string,
        public updated_at?: string
    ){}

    getDataBookingAdditionalItem(){
        return {
            quantity: this.quantity,
            booking_id: this.booking_id,
            additional_item_id: this.additional_item_id,
            created_at: new Date(),
            updated_at: new Date()
        }
    }
}