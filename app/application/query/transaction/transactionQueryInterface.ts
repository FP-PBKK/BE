import { TransactionDTO } from "./transactionDTO";

export interface TransactionQueryInterface{
    getAllTransactions(limit: number, offset: number): Promise<TransactionDTO[]>;

    getTransactionById(id: string): Promise<TransactionDTO>;
}