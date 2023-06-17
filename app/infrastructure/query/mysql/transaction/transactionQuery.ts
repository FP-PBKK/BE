import { TransactionDTO } from "../../../../application/query/transaction/transactionDTO";
import { TransactionQueryInterface } from "../../../../application/query/transaction/transactionQueryInterface";
import { sequelize } from "../../../../../config/database";
import { getDateRange } from "../../../../shared/dateUtils";

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
                data.push(new TransactionDTO(element.id, element.total, element.paid, element.qr_id, element.booking_id, element.createdAt, element.updatedAt, element.discount_id));
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
                return new TransactionDTO(element[0][0].id, element[0][0].total, element[0][0].paid, element[0][0].qr_id, element[0][0].booking_id, element[0][0].createdAt, element[0][0].updatedAt, element[0][0].discount_id);
            });
        }
        catch(err){
            throw err;
        }
    }

    async getTransactionByUserID(userID: string): Promise<TransactionDTO[]> {
        try{
            const sql = `SELECT transactions.*
                        FROM transactions
                        LEFT JOIN bookings ON transactions.booking_id = bookings.id
                        WHERE bookings.user_id = :user_id
                        ORDER BY transactions.createdAt ASC`;
            const fetchData = await sequelize.query(sql, {
                replacements: {
                    user_id: userID
                }
            });
            const data: TransactionDTO[] = [];
            if(!fetchData[0]){
                return data;
            }
            fetchData[0].forEach((element: any) => {
                data.push(new TransactionDTO(element.id, element.total, element.paid, element.qr_id, element.booking_id, element.createdAt, element.updatedAt, element.discount_id));
            });
            return data;
        }
        catch(err){
            throw err;
        }
    }

    async checkValidTransactionByDateTime(date: string, time: string): Promise<boolean> {
        const {start_date, end_date} = getDateRange(date);
        const sql = `SELECT transactions.*
                    FROM transactions
                    LEFT JOIN bookings ON transactions.booking_id = bookings.id
                    LEFT JOIN schedules ON bookings.schedules_id = schedules.id
                    WHERE schedules.time = :time
                    AND (bookings.date BETWEEN :start_date AND :end_date)
                    AND
                    (transactions.paid = true OR bookings.booking_status = 'finish')`
        const fetchData = sequelize.query(sql, {
            replacements: {
                time: time,
                start_date: start_date,
                end_date: end_date
            }
        });
        return fetchData.then((element: any) => {
            if(!element[0][0]){
                return false;
            }
            return true;
        });
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
            return response.then((element: any) => {
                return element[1];
            });
        }
        catch(err){
            throw err;
        }
    }

    async updateTransaction(id: string, data: any){
        try{
            const sql = `UPDATE transactions 
                        SET 
                            total = IF( :total IS NULL, total, :total), 
                            paid = IF(:paid IS NULL, paid, :paid), 
                            discount_id = IF(:discount_id IS NULL, discount_id, :discount_id), 
                            qr_id = IF(:qr_id IS NULL, qr_id, :qr_id),
                            booking_id = IF(:booking_id IS NULL, booking_id, :booking_id), 
                            updatedAt = IF(:updatedAt IS NULL, NOW(), :updatedAt)
                        WHERE id = :id`;
            const response = sequelize.query(sql, {
                replacements: {
                    id: id,
                    total: data.total || null,
                    paid: data.paid || null,
                    discount_id: data.discount_id || null,
                    qr_id: data.qr_id || null,
                    booking_id: data.booking_id || null,
                    updatedAt: data.updatedAt || null,
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