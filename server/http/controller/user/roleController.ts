import { RoleRepository } from "../../../../app/domain/user/repository/roleRepository";
import { RoleCommand } from "../../../../app/domain/user/commands/roleCommands";
import {Request, Response} from "express";

export class RoleController {
    
    async getAllRole(req: Request, res: Response) {
        try {
            const result = await new RoleRepository().getAllRole();
            res.send({
                status: 200,
                message: "Success",
                data: result
            });
        } catch (error) {
            res.send(error);
        }
    }

    async createRole(req: Request, res: Response) {
        try {
            const result = await new RoleCommand().createRole(req.body);
            res.send({
                status: 200,
                message: "Success",
                data: result
            });
        } catch (error) {
            res.send(error);
        }
    }
}