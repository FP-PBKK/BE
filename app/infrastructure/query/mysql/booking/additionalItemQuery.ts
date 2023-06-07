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
                if(!res[0]){
                    return data;
                }
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

    async createBookingAdditionalItems(data: any) {
        try{
            const sql = "INSERT INTO bookingadditionalitems (quantity, booking_id, additional_item_id, createdAt, updatedAt) VALUES (:quantity, :booking_id, :additional_item_id, :createdAt, :updatedAt)";
            const response = sequelize.query(sql, {
                replacements: {
                    quantity: data.quantity,
                    booking_id: data.booking_id,
                    additional_item_id: data.additional_item_id,
                    createdAt: data.created_at,
                    updatedAt: data.updated_at
                }
            });
            return response.then((res: any) => {
                return res[1];
            }); 
        }
        catch(err){
            throw err;
        }
    }
}