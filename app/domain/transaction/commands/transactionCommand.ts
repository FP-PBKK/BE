import { TransactionQuery } from "../../../infrastructure/query/mysql/transaction/transactionQuery";
import { TransactionModel } from "../models/transactionModel";
import { generateTransactionId } from "../../../shared/generateId";
import { generateQR } from "../../../shared/generateId";

export class TransactionCommand{
    private transactionQuery: TransactionQuery;

    constructor() {
        this.transactionQuery = new TransactionQuery();
    }

    async createTransaction(data: any) {
        try{
            data.id = generateTransactionId();
            data.qr_id = generateQR();
            data.paid = false;
            const transactionModel = new TransactionModel(data.id, data.total, data.paid, data.discount_id, data.qr_id, data.id_booking);
            const createTransactionRes = await this.transactionQuery.createTransaction(transactionModel.getDataTransaction());
            const transactionId = data.id;
            const qrId = data.qr_id;
            return {transactionId, qrId, createTransactionRes};
        }
        catch(error){
            throw error;
        }        
    }

    async updateStatusTransaction(qrId: string, status: boolean) {
        try{
            const updateTransactionRes = await this.transactionQuery.updatePaidStatus(qrId, status);
            return updateTransactionRes;
        }
        catch(error){
            throw error;
        }
    }

    async updateTransaction(id: string, data: any) {
        try{
            //find transaction by id
            const transaction = await this.transactionQuery.getTransactionById(id);
            if(transaction.id.length == 0){
                return {
                    message: "Transaction not found"
                }
            }
            //update transaction
            const transactionModel = new TransactionModel(id, data.total, data.paid, data.discount_id, data.qr_id, data.id_booking);
            const updateTransactionRes = await this.transactionQuery.updateTransaction(id, transactionModel.getDataTransaction());
            return updateTransactionRes;
        }
        catch(error){
            throw error;
        }
    }
}