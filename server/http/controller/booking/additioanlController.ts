import { AdditionalItemRepository } from "../../../../app/domain/booking/repository/additionalItemQuery";
import { Request, Response } from "express";

export class AdditionalItemController {
    async getAllAdditionalItem(req: Request, res: Response){
        try{
            const additionalItemRepository = new AdditionalItemRepository();
            const additionalItemQuery = additionalItemRepository.getAdditionalItemQuery();
            const data = await additionalItemQuery.getAllAdditionalItem();
            res.status(200).send({
                status: 200,
                message: "Success",
                data: data
            });
        }
        catch(err){
            res.status(500).send({
                status: 500,
                message: "Internal Server Error",
                data: err
            });
        }
    }
}