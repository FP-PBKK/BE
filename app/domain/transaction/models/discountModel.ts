export class DiscountModel{
    constructor(
        public id: string,
        public name: string,
        public percentage: number,
        public start_date: string,
        public end_date: string,
        public description?: string,
        public created_at?: string,
        public updated_at?: string
    ){}

    getDataDiscount(){
        return {
            id: this.id,
            name: this.name,
            percentage: this.percentage,
            start_date: this.start_date,
            end_date: this.end_date,
            description: this.description? this.description : '',
            created_at: new Date(),
            updated_at: new Date()
        }
    }
}