import { UserQuery } from "../../../infrastructure/query/mysql/user/userQuery";
import { UserModel } from "../models/userModel";
import { generateUserId } from "../../../shared/generateId";

export class UserCommand{
    private userQuery: UserQuery;

    constructor() {
        this.userQuery = new UserQuery();
    }

    async createUser(data: any) {
        try{
            data.id = generateUserId();
            const userModel = new UserModel(data.id, data.role_id, data.name, data.email, data.password, data.phone_number);
            return await this.userQuery.createUser(userModel.getDataUserArr());
        }
        catch(error){
            return error;
        }        
    }
}