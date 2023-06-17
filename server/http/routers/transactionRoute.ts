import express, {Request, Response} from "express";
const router = express.Router();
import { TransactionController } from "../controller/transaction/transactionController";
import { DiscountController } from "../controller/transaction/discountController";
import { XenditController } from "../controller/transaction/xenditController";

export class TransactionRoute{
    private transactionController: TransactionController;
    private xenditController: XenditController;
    private discountController: DiscountController;

    constructor(){
        this.transactionController = new TransactionController();
        this.xenditController = new XenditController();
        this.discountController = new DiscountController();
    }

    public get routes(){
        const transController = this.transactionController;
        router.get("/", transController.getAllTransactions);
        router.get("/id/:id", transController.getTransactionById);
        router.get("/user/:userID", transController.getTransactionByUserID)
        router.get("/check/:date&&:time", transController.checkValidTransactionByDateTime)
        router.post("/", transController.createTransaction);
        router.put("/:id", transController.updateTransaction);

        //discount
        const discountController = this.discountController;
        router.get("/discount", discountController.getAllDiscounts);
        router.get("/discount/id/:id", discountController.getDiscountById);
        router.get("/discount/validity/:id", discountController.checkDiscountValidity);
        router.post("/discount", discountController.createDiscount);

        //xendit
        const xenditController = this.xenditController;
        router.get('/getqr/?:qrid&&:amount', xenditController.getQR);
        router.get('/getqr/:qrid', xenditController.getQRCode);
        router.post("/xendit/callback", xenditController.callBack);
        router.get("/xendit/simulate/:qrid", xenditController.simulateTransaction);
        return router;
    }
}