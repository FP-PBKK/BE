import { TransactionDTO } from "./transactionDTO";

export interface TransactionQueryInterface{
    getAllTransactions(): Promise<TransactionDTO[]>;

    getTransactionById(id: string): Promise<TransactionDTO>;
}