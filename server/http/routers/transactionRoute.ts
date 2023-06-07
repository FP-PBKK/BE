import express, {Request, Response} from "express";
const router = express.Router();
import { TransactionController } from "../controller/transaction/transactionController";
import { XenditController } from "../controller/transaction/xenditController";

export class TransactionRoute{
    private transactionController: TransactionController;
    private xenditController: XenditController;

    constructor(){
        this.transactionController = new TransactionController();
        this.xenditController = new XenditController();
    }

    public get routes(){
        const transController = this.transactionController;
        router.get("/", transController.getAllTransactions);
        router.get("/:id", transController.getTransactionById);
        router.post("/", transController.createTransaction);

        //xendit
        const xenditController = this.xenditController;
        router.get('/getqr/?:qrid&&:amount', xenditController.getQR);
        router.get('/getqr/:qrid', xenditController.getQRCode);
        router.post("/xendit/callback", xenditController.callBack);
        return router;
    }
}