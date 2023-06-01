import { AdditionalItemInterface } from "../../../../application/query/booking/additionalItemInterface";
import { AdditionalItemDTO } from "../../../../application/query/booking/additionalItemDTO";
import { sequelize } from "../../../../../config/database";

export class AdditionalItemQuery implements AdditionalItemInterface {
        
    async getAllAdditionalItem(): Promise<AdditionalItemDTO[]> {
        try{
            const sql = `SELECT * FROM additionalitems`;
            const fetchData = sequelize.query(sql);
            return fetchData.then((res: any) => {
                const data: AdditionalItemDTO[] = [];
                res[0].forEach((element: any) => {
                    data.push(new AdditionalItemDTO(element.id, element.name, element.price, element.description));
                });
                return data;
            });    
        }
        catch(err){
            throw err;
        }
    }
}