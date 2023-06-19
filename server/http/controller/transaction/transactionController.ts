import { TransactionRepository } from "../../../../app/domain/transaction/repository/transactionRepository";
import { TransactionCommand } from "../../../../app/domain/transaction/commands/transactionCommand";
import { Request, Response } from "express";
import { getPagination, getPagingData } from "../../../../app/shared/paginationUtils";

export class TransactionController {

    async getAllTransactions(req: Request, res: Response){
        try{
            const { page, size } = req.query;
            const { limit, offset } = getPagination(page as unknown as number, size as unknown as number);
            const result = await new TransactionRepository().getAllTransactions(limit as number, offset as number);
            const data = getPagingData(result, page as unknown as number, limit as unknown as number);
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

    async getTransactionByUserID(req: Request, res: Response){
        try{
            const {userID} = req.params;
            const data = await new TransactionRepository().getTransactionByUserId(userID);
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

    async checkValidTransactionByDateTime(req: Request, res: Response){
        try{
            const {date, time} = req.params;
            const data = await new TransactionRepository().checkValidTransactionByDateTime(date, time);
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

    async updateTransaction(req: Request, res: Response){
        try{
            const {id} = req.params;
            const data = req.body;
            const updateTransactionRes = await new TransactionCommand().updateTransaction(id, data);
            res.status(200).json({
                status: 200,
                message: "Success",
                data: updateTransactionRes
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