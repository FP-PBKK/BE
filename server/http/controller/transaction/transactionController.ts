import { TransactionRepository } from "../../../../app/domain/transaction/repository/transactionRepository";
import { TransactionCommand } from "../../../../app/domain/transaction/commands/transactionCommand";
import { Request, Response } from "express";

export class TransactionController {

    async getAllTransactions(req: Request, res: Response){
        try{
            const data = await new TransactionRepository().getAllTransactions();
            res.status(200).json({
                status: 200,
                message: "Success",
                data: data
            });
        }
        catch(err){
            res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                data: err
            });
        }
    }

    async getTransactionById(req: Request, res: Response){
        try{
            const {id} = req.params;
            const data = await new TransactionRepository().getTransactionById(id);
            res.status(200).json({
                status: 200,
                message: "Success",
                data: data
            });
        }
        catch(err){
            res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                data: err
            });
        }
    }

    async createTransaction(req: Request, res: Response){
        try{
            const data = req.body;
            const createTransactionRes = await new TransactionCommand().createTransaction(data);
            res.status(200).json({
                status: 200,
                message: "Success",
                data: createTransactionRes
            });
        }
        catch(err){
            res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                data: err
            });
        }
    }
}