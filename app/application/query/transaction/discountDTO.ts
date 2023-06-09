export class DiscountDTO{
    constructor(
        private id: string,
        private name: string,
        private percentage: number,
        private start_date: string,        
        private end_date: string,
        private description: string,
        private createdAt: string,
        private updatedAt: string
    ){}
}