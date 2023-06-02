import { UserRepository } from "../../../../app/domain/user/repository/userRepository";
import { UserCommand } from "../../../../app/domain/user/commands/userCommand";
import {Request, Response} from "express";

export class UserController {

    async getAllUser(req: Request, res: Response) {
        try {
            const result = await new UserRepository().getAllUser();
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

    async getUserById(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const result = await new UserRepository().getUserById(id as string);
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

    async createUser(req: Request, res: Response) {
        try {
            const result = await new UserCommand().createUser(req.body);
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