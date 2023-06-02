import { PackageRepository } from "../../../../app/domain/booking/repository/packageRepository";
import {Request, Response} from "express";

export class PackageController {
    private packageRepository: PackageRepository;

    constructor() {
        this.packageRepository = new PackageRepository();
    }

    public getAllPackage = async (req: Request, res: Response) => {
        try{
            const data = await this.packageRepository.getAllPackage();
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

    public getPackageById = async (req: Request, res: Response) => {
        try{
            const {id} = req.params;
            const data = await this.packageRepository.getPackageById(id);
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