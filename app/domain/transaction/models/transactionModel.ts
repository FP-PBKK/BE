export class TransactionModel{
    constructor(
        public id: string,
        public total: string,
        public paid: boolean,
        public discount_id: string,
        public qr_id: string,
        public booking_id: string,
        public created_at?: string,
        public updated_at?: string
    ){}

    getDataTransaction(){
        return {
            id: this.id,
            total: this.total,
            paid: this.paid,
            discount_id: this.discount_id,
            qr_id: this.qr_id,
            booking_id: this.booking_id,
            created_at: new Date(),
            updated_at: new Date()
        }
    }
}