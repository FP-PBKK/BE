import { DiscountModel } from "../models/discountModel";
import { DiscountQuery } from "../../../infrastructure/query/mysql/transaction/discountQuery";

export class DiscountCommand{
    private discountQuery: DiscountQuery;

    constructor() {
        this.discountQuery = new DiscountQuery();
    }

    async createDiscount(data: any) {
        try{
            const discountModel = new DiscountModel(data.id, data.name, data.percentage, data.start_date, data.end_date, data.desciption);
            const createDiscountRes = await this.discountQuery.createDiscount(discountModel.getDataDiscount());
            const discountId = data.id;
            return {discountId, createDiscountRes};
        }
        catch(error){
            throw error;
        }        
    }
}