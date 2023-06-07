import { TransactionDTO } from "../../../../application/query/transaction/transactionDTO";
import { TransactionQueryInterface } from "../../../../application/query/transaction/transactionQueryInterface";
import { sequelize } from "../../../../../config/database";

export class TransactionQuery implements TransactionQueryInterface {
    async getAllTransactions(): Promise<TransactionDTO[]> {
        try{
            const sql = `SELECT * FROM transactions
                        ORDER BY createdAt ASC`;
            const fetchData = await sequelize.query(sql);
            const data: TransactionDTO[] = [];
            if(!fetchData[0]){
                return data;
            }
            fetchData[0].forEach((element: any) => {
                data.push(new TransactionDTO(element.id, element.total, element.paid, element.booking_id, element.qris_id, element.created_at, element.updated_at, element.discount_id));
            });
            return data;
        }
        catch(err){
            throw err;
        }
    }

    async getTransactionById(id: string): Promise<TransactionDTO> {
        try{
            const sql = `SELECT * FROM transactions WHERE id = :id
                        ORDER BY createdAt ASC`;
            const fetchData = sequelize.query(sql, {
                replacements: {
                    id: id
                }
            });
            return fetchData.then((element: any) => {
                if(!element[0][0]){
                    return new TransactionDTO('', 0, false, '', '', '', '');
                }
                return new TransactionDTO(element[0][0].id, element[0][0].total, element[0][0].paid, element[0][0].booking_id, element[0][0].qris_id, element[0][0].created_at, element[0][0].updated_at, element[0][0].discount_id);
            });
        }
        catch(err){
            throw err;
        }
    }

    async createTransaction(data: any){
        try{
            const sql = `INSERT INTO transactions (id, total, paid, booking_id, qr_id, discount_id, createdAt, updatedAt) VALUES (:id, :total, :paid, :booking_id, :qr_id, :discount_id, :createdAt, :updatedAt)`;
            const response = sequelize.query(sql, {
                replacements: {
                    id: data.id,
                    total: data.total,
                    paid: data.paid,
                    booking_id: data.booking_id,
                    qr_id: data.qr_id,
                    discount_id: data.discount_id,
                    createdAt: data.created_at,
                    updatedAt: data.updated_at
                }
            });
            return response.then((element: any) => {
                return element[1];
            });
        }
        catch(err){
            throw err;
        }
    }

    async getTransactionByQRId(qrId: string) {
        try{
            const sql = `SELECT * FROM transactions WHERE qr_id = :qr_id`;
            const fetchData = sequelize.query(sql, {
                replacements: {
                    qr_id: qrId
                }
            });
            return fetchData.then((element: any) => {
                if(!element[0][0]){
                    return false;
                }
                return true;
            });
        }
        catch(err){
            throw err;
        }
    }

    async updatePaidStatus(qrId: string, paid: boolean) {
        try{
            const sql = `UPDATE transactions SET paid = :paid WHERE qr_id = :qr_id`;
            const response = sequelize.query(sql, {
                replacements: {
                    qr_id: qrId,
                    paid: paid
                }
            });
            console.log("ini respon", response);
            return response.then((element: any) => {
                return element[1];
            });
        }
        catch(err){
            throw err;
        }
    }
}