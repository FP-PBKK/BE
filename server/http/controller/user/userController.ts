import { UserRepository } from "../../../../app/domain/user/repository/userRepository";
import { UserCommand } from "../../../../app/domain/user/commands/userCommand";
import {Request, Response} from "express";
import { getPagination, getPagingData } from "../../../../app/shared/paginationUtils";

export class UserController {

    async getAllUser(req: Request, res: Response) {
        try {
            const { page, size } = req.query;
            const { limit, offset } = getPagination(page as unknown as number, size as unknown as number);
            const result = await new UserRepository().getAllUser(limit as number, offset as number);
            const data = getPagingData(result, page as unknown as number, limit as unknown as number);
            res.status(200).send({
                status: 200,
                message: "Success",
                data: data
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
            if(!result || result.name.length == 0){
                return res.status(404).send({
                    status: 404,
                    message: "user not found",
                    data: {}
                });
            }
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

    async updateUser(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const result = await new UserCommand().updateUser(id as string, req.body);
            if(result.message){
                return res.status(404).send({
                    status: 404,
                    message: result.message,
                    data: {}
                });
            }
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

    async deleteUser(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const result = await new UserCommand().deleteUser(id as string);
            if(result.message){
                return res.status(404).send({
                    status: 404,
                    message: result.message,
                    data: {}
                });
            }
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
}