import { UserRepository } from "../../../../app/domain/user/repository/userRepository";
import { UserCommand } from "../../../../app/domain/user/commands/userCommand";
import {Request, Response} from "express";

export class UserController {

    async getAllUser(req: Request, res: Response) {
        try {
            const result = await new UserRepository().getAllUser();
            res.send({
                status: 200,
                message: "Success",
                data: result
            });
        } catch (error) {
            res.send(error);
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            const {id} = req.body
            const result = await new UserRepository().getUserById(id as unknown as number);
            res.send({
                status: 200,
                message: "Success",
                data: result
            });
        } catch (error) {
            res.send(error);
        }
    }

    async createUser(req: Request, res: Response) {
        try {
            const result = await new UserCommand().createUser(req.body);
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