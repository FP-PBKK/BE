import { TransactionQuery } from "../../../infrastructure/query/mysql/transaction/transactionQuery";

export class TransactionRepository {
    private transactionQuery: TransactionQuery;

    constructor(){
        this.transactionQuery = new TransactionQuery();
    }

    async getAllTransactions(limit: number, offset: number): Promise<any[]> {
        try{
            const data = await this.transactionQuery.getAllTransactions(limit, offset);
            return data;
        }
        catch(err){
            throw err;
        }
    }

    async getTransactionById(id: string): Promise<any> {
        try{
            const data = await this.transactionQuery.getTransactionById(id);
            return data;
        }
        catch(err){
            throw err;
        }
    }

    async getTransactionByQRId(qrId: string): Promise<any> {
        try{
            const data = await this.transactionQuery.getTransactionByQRId(qrId);
            return data;
        }
        catch(err){
            throw err;
        }
    }

    async getTransactionByUserId(userID: string): Promise<any> {
        try{
            const data = await this.transactionQuery.getTransactionByUserID(userID);
            return data;
        }
        catch(err){
            throw err;
        }
    }

    async checkValidTransactionByDateTime(date: string, time: string): Promise<any> {
        try{
            const data = await this.transactionQuery.checkValidTransactionByDateTime(date, time);
            return data;
        }
        catch(err){
            throw err;
        }
    }
}