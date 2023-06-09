import { DiscountQuery } from "../../../infrastructure/query/mysql/transaction/discountQuery";
import { DiscountDTO } from "../../../application/query/transaction/discountDTO";

export class DiscountRepository{
    private discountQuery: DiscountQuery;

    constructor(){
        this.discountQuery = new DiscountQuery();
    }

    async getAllDiscounts(): Promise<DiscountDTO[]> {
        return this.discountQuery.getAllDiscounts();
    }

    async getDiscountById(id: string): Promise<DiscountDTO> {
        return this.discountQuery.getDiscountById(id);
    }

    async checkDiscountValidity(id: string): Promise<boolean> {
        return this.discountQuery.checkDiscountValidity(id);
    }
}