import { DiscountDTO } from "./discountDTO";

export interface DiscountQueryInterface{
    getAllDiscounts(): Promise<DiscountDTO[]>;

    getDiscountById(id: string): Promise<DiscountDTO>;
    
    checkDiscountValidity(id: string): Promise<boolean>;
}