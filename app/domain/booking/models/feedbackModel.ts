export class FeedbackModel{
    constructor(
        public id: string,
        public user_id: string,
        public booking_id: string,
        public comment: string,
        public rate: string,
        public created_at?: string,
        public updated_at?: string
    ){}

    getDataFeedback(){
        return {
            id: this.id,
            user_id: this.user_id,
            booking_id: this.booking_id,
            comment: this.comment,
            rate: this.rate,
            created_at: new Date(),
            updated_at: new Date()
        }
    }
}