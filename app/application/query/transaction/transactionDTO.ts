export class TransactionDTO{
    constructor(
        private id: string,
        private total: number,
        private isPaid: boolean,
        private createdAt: string,
        private updatedAt: string,
        private discountId: string,
        private qrisId: number,
    ){}
}