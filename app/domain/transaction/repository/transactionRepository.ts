import { TransactionQuery } from "../../../infrastructure/query/mysql/transaction/transactionQuery";

export class TransactionRepository {
    private transactionQuery: TransactionQuery;

    constructor(){
        this.transactionQuery = new TransactionQuery();
    }

    async getAllTransactions(): Promise<any[]> {
        try{
            const data = await this.transactionQuery.getAllTransactions();
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
}