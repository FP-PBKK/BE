import { UserRepository } from "../../../../app/domain/user/repository/userRepository";
import { UserCommand } from "../../../../app/domain/user/commands/userCommand";
import { PasswordUtils } from "../../../../app/shared/passwordUtils";
const jwt = require('jsonwebtoken');

export class AuthController{
    async login(req: any, res: any){
        try {
            const result = await new UserRepository().findUserByEmail(req.body.email);
            if(!result){
                res.send({
                    status: 404,
                    message: "User not found",
                    data: {}
                });
            }
            if(await PasswordUtils.comparePassword(req.body.password, result.password)){
                const token = jwt.sign({ email: result.email, role: result.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.send({
                    status: 200,
                    message: "Success",
                    data: {
                        token: token
                    }
                });
            }else{
                res.send({
                    status: 400,
                    message: "email or password is wrong",
                    data: {}
                });
            }
        } catch (error) {
            res.send(error);
        }
    }

    async register(req: any, res: any){
        try {
            const result = await new UserRepository().findUserByEmail(req.body.email);
            console.log(result);
            if(result.email === req.body.email){
                res.send({
                    status: 400,
                    message: "User already exist",
                    data: {}
                });
            }
            const data = await new UserCommand().createUser(req.body);
            res.send({
                status: 200,
                message: "Success",
                data: data
            });
        } catch (error) {
            res.send(error);
        }
    }
}