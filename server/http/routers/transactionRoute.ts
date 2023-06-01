import express, {Request, Response} from "express";
const router = express.Router();
import { TransactionController } from "../controller/transaction/transactionController";

export class TransactionRoute{
    private transactionController: TransactionController;

    constructor(){
        this.transactionController = new TransactionController();
    }

    public get routes(){
        const controller = this.transactionController;
        router.get("/", controller.getAllTransactions);
        router.post("/getbyid", controller.getTransactionById);
        return router;
    }
}