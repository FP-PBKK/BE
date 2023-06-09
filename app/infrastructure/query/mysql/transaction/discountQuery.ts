import { DiscountDTO } from "../../../../application/query/transaction/discountDTO";
import { DiscountQueryInterface } from "../../../../application/query/transaction/discountQueryInterface";
import { sequelize } from "../../../../../config/database";

export class DiscountQuery implements DiscountQueryInterface {
    async getAllDiscounts(): Promise<DiscountDTO[]> {
        const sql = `SELECT * FROM discounts ORDER BY createdAt ASC`;
        const fetchData = await sequelize.query(sql);
        const data: DiscountDTO[] = [];
        if(!fetchData[0]){
            return data;
        }
        fetchData[0].forEach((element: any) => {
            data.push(new DiscountDTO(element.id, element.name, element.percentage, element.start_date, element.end_date, element.description, element.createdAt, element.updatedAt));
        });
        return data;
    }

    async getDiscountById(id: string): Promise<DiscountDTO> {
        const sql = `SELECT * FROM discounts WHERE id = :id ORDER BY createdAt ASC`;
        const fetchData = sequelize.query(sql, {
            replacements: {
                id: id
            }
        });
        return fetchData.then((element: any) => {
            if(!element[0][0]){
                return new DiscountDTO('', '', 0, '', '', '', '', '');
            }
            return new DiscountDTO(element[0][0].id, element[0][0].name, element[0][0].percentage, element[0][0].start_date, element[0][0].end_date, element[0][0].description, element[0][0].createdAt, element[0][0].updatedAt);
        });
    }

    async checkDiscountValidity(id: string): Promise<boolean> {
        const sql = `SELECT * FROM discounts 
                    WHERE id = :id 
                    AND start_date <= CURDATE()
                    AND end_date >= CURDATE()`;
        const fetchData = sequelize.query(sql, {
            replacements: {
                id: id
            }
        });
        return fetchData.then((element: any) => {
            if(!element[0][0]){
                return false;
            }
            return true;
        });
    }
}