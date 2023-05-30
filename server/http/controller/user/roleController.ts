import { RoleRepository } from "../../../../app/domain/user/repository/roleRepository";
import { RoleCommand } from "../../../../app/domain/user/commands/roleCommands";
import {Request, Response} from "express";

export class RoleController {
    
    async getAllRole(req: Request, res: Response) {
        try {
            const result = await new RoleRepository().getAllRole();
            res.status(200).send({
                status: 200,
                message: "Success",
                data: result
            });
        } catch (error) {
            res.status(500).send({
                status: 500,
                message: "Internal Server Error",
                data: {}
            })
        }
    }

    async createRole(req: Request, res: Response) {
        try {
            const result = await new RoleCommand().createRole(req.body);
            res.status(201).send({
                status: 201,
                message: "Success",
                data: result
            });
        } catch (error) {
            res.status(500).send({
                status: 500,
                message: "Internal Server Error",
                data: {}
            })
        }
    }
}