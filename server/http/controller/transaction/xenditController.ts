import { Request, Response } from "express";
import Xendit from "xendit-node";
import { TransactionCommand } from "../../../../app/domain/transaction/commands/transactionCommand";
import { TransactionRepository } from "../../../../app/domain/transaction/repository/transactionRepository";

export class XenditController {
    async getQR(req : Request, res : Response){
        const x = new Xendit({ secretKey: process.env.XENDIT_KEY as string});
        const { QrCode } = x;
        const qrcodeSpecificOptions = {};
        const q = new QrCode(qrcodeSpecificOptions);
        try {
            const response = await q.createCode({
                externalID: req.params.qrid,
                amount: req.params.amount as unknown as number,
                type: "DYNAMIC" as any,
                callbackURL: process.env.CALLBACK_URL as string,
                metadata: null as any
            })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "failed",
                data: error
            })
        }
    }

    async getQRCode(req : Request, res : Response){
        const x = new Xendit({ secretKey: process.env.XENDIT_KEY as string});
        const { QrCode } = x;
        const qrcodeSpecificOptions = {};
        const q = new QrCode(qrcodeSpecificOptions);
        try {
            const response = await q.getCode({
                externalID: req.params.qrid
            })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "failed",
                data: error
            })
        }
    }

    async callBack(req : Request, res : Response){
        const qrId = req.body.external_id;
        const response = await new TransactionRepository().getTransactionByQRId(qrId)
        if (response) {
            const updateTransaction = await new TransactionCommand().updateStatusTransaction(qrId, true);
            if (updateTransaction) {
                return res.sendStatus(200)
            }
        }
        return res.sendStatus(500)
    }
}