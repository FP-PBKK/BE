export class FeedbackDTO{
    constructor(
        public id: string,
        public user_id: string,
        public booking_id: string,
        public comment: string,
        public rate: number,
        public createdAt: string,
        public updatedAt: string
    ){}
}