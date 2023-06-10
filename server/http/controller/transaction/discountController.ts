import { DiscountRepository } from "../../../../app/domain/transaction/repository/discountRepository";
import { DiscountCommand } from "../../../../app/domain/transaction/commands/discountCommand";
import { Request, Response } from "express";

export class DiscountController {

    async getAllDiscounts(req: Request, res: Response) {
        const data = await new DiscountRepository().getAllDiscounts();
        res.status(200).send({
            status: 200,
            message: 'Success',
            data: data
        });
    }

    async getDiscountById(req: Request, res: Response) {
        const data = await new DiscountRepository().getDiscountById(req.params.id);
        res.status(200).send({
            status: 200,
            message: 'Success',
            data: data
        });
    }

    async checkDiscountValidity(req: Request, res: Response) {
        const data = await new DiscountRepository().checkDiscountValidity(req.params.id);
        res.status(200).send({
            status: 200,
            message: 'Success',
            data: data
        });
    }

    async createDiscount(req: Request, res: Response) {
        const data = await new DiscountCommand().createDiscount(req.body);
        res.status(200).send({
            status: 200,
            message: 'Success',
            data: data
        });
    }
}