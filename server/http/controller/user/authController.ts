import { UserRepository } from "../../../../app/domain/user/repository/userRepository";
import { UserCommand } from "../../../../app/domain/user/commands/userCommand";
import { PasswordUtils } from "../../../../app/shared/passwordUtils";
const jwt = require('jsonwebtoken');

export class AuthController{
    async login(req: any, res: any){
        try {
            const result = await new UserRepository().findUserByEmail(req.body.email);
            if(!result){
                res.status(400).send({
                    status: 400,
                    message: "Email not found",
                    data: {}
                });
            }
            if(await PasswordUtils.comparePassword(req.body.password, result.password)){
                const token = jwt.sign({ email: result.email, role: result.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                console.log("success login");
                res.status(200).send({
                    status: 200,
                    message: "Success",
                    data: {
                        token: token
                    }
                });
            }else{
                res.status(400).send({
                    status: 400,
                    message: "Wrong password",
                    data: {}
                });
            }
        } catch (error) {
            res.status(500).send({
                status: 500,
                message: "Internal Server Error",
                data: {}
            })
        }
    }

    async register(req: any, res: any){
        try {
            const result = await new UserRepository().findUserByEmail(req.body.email);
            if(result.email === req.body.email){
                res.status(400).send({
                    status: 400,
                    message: "Email already exist",
                    data: {}
                });
            }
            const data = await new UserCommand().createUser(req.body);
            console.log("success register");
            res.status(201).send({
                status: 201,
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

    async whoami(req: any, res: any){
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const result = await new UserRepository().findUserByEmail(decoded.email);
            res.status(200).send({
                status: 200,
                message: "Success",
                data: {
                    email: result.email,
                    role: result.role,
                    username: result.name,
                    phone: result.phone
                }
            });
        } catch (error) {
            res.status(500).send({
                status: 500,
                message: "Internal Server Error",
                data: error
            })
        }
    }
}