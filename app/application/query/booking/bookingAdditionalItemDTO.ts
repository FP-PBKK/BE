import { AdditionalItemDTO } from './additionalItemDTO';

export class BookingAdditionalItemDTO{
    constructor(
        private additionalItemId: string,
        private quantity: number,
        private name: string,
        private price: number
        // private additionalItem?: AdditionalItemDTO
    ){}
}