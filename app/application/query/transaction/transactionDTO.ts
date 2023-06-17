export class TransactionDTO{
    constructor(
        public id: string,
        private total: number,
        private paid: boolean,
        private qrId: string,        
        private bookingId: string,
        private createdAt: string,
        private updatedAt: string,
        private discountId?: string,
    ){}
}