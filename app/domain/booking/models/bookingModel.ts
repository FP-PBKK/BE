export class BookingModel{
    constructor(
        public id: string,
        public user_id: string,
        public schedules_id: string,
        public packages_id: string,
        public booking_status: string,
        public created_at?: string,
        public updated_at?: string
    ){}

    getDataBooking(){
        return {
            id: this.id,
            user_id: this.user_id,
            schedules_id: this.schedules_id,
            packages_id: this.packages_id,
            booking_status: this.booking_status,
            created_at: new Date(),
            updated_at: new Date()
        }
    }
}