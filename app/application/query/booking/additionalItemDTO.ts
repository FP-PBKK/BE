export class AdditionalItemDTO{
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public description?: string,
    ){}
}