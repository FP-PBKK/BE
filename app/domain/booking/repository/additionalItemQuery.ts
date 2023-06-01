import { AdditionalItemQuery } from "../../../infrastructure/query/mysql/booking/additionalItemQuery";

export class AdditionalItemRepository {
    private additionalItemQuery: AdditionalItemQuery;

    constructor(){
        this.additionalItemQuery = new AdditionalItemQuery();
    }

    public getAdditionalItemQuery(): AdditionalItemQuery {
        try{
            return this.additionalItemQuery;
        }
        catch(err){
            throw err;
        }
    }
}