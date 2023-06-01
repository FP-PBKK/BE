import { TransactionDTO } from "../../../../application/query/transaction/transactionDTO";
import { TransactionQueryInterface } from "../../../../application/query/transaction/transactionQueryInterface";
import { sequelize } from "../../../../../config/database";

export class TransactionQuery implements TransactionQueryInterface {
    async getAllTransactions(): Promise<TransactionDTO[]> {
        try{
            const sql = `SELECT * FROM transactions`;
            const fetchData = await sequelize.query(sql);
            const data: TransactionDTO[] = [];
            if(!fetchData[0]){
                return data;
            }
            fetchData[0].forEach((element: any) => {
                data.push(new TransactionDTO(element.id, element.total, element.is_paid, element.created_at, element.updated_at, element.discount_id, element.qris_id));
            });
            return data;
        }
        catch(err){
            throw err;
        }
    }

    async getTransactionById(id: string): Promise<TransactionDTO> {
        try{
            const sql = `SELECT * FROM transactions WHERE id = :id`;
            const fetchData = sequelize.query(sql, {
                replacements: {
                    id: id
                }
            });
            return fetchData.then((element: any) => {
                if(!element[0][0]){
                    return new TransactionDTO('', 0, false, '', '', '', 0);
                }
                return new TransactionDTO(element[0][0].id, element[0][0].total, element[0][0].is_paid, element[0][0].created_at, element[0][0].updated_at, element[0][0].discount_id, element[0][0].qris_id);
            });
        }
        catch(err){
            throw err;
        }
    }
}