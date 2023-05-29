import { UserQuery } from "../../../infrastructure/query/mysql/user/userQuery";
import { UserModel } from "../models/userModel";
import { generateUserId } from "../../../shared/generateId";
import { PasswordUtils } from "../../../shared/passwordUtils";

export class UserCommand{
    private userQuery: UserQuery;

    constructor() {
        this.userQuery = new UserQuery();
    }

    async createUser(data: any) {
        try{
            data.id = generateUserId();
            data.password = await PasswordUtils.hashPassword(data.password);
            const userModel = new UserModel(data.id, data.role_id, data.name, data.email, data.password, data.phone_number);
            return await this.userQuery.createUser(userModel.getDataUserArr());
        }
        catch(error){
            return error;
        }        
    }
}