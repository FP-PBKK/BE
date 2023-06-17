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
            throw error;
        }        
    }

    async updateUser(id: string, data: any) {
        try{
            //find user
            const user = await this.userQuery.getUserById(id);
            if(user.id.length == 0){
                return {
                    message: 'User not found'
                }
            }
            data.id = id;
            if(data.password){
                data.password = await PasswordUtils.hashPassword(data.password);
            }
            const userModel = new UserModel(data.id, data.role_id, data.name, data.email, data.password, data.phone_number);
            return await this.userQuery.updateUser(id, userModel.getDataUser());
        }
        catch(error){
            throw error;
        }
    }

    async deleteUser(id: string) {
        try{
            //find user
            const user = await this.userQuery.getUserById(id);
            if(user.id.length == 0){
                return {
                    message: 'User not found'
                }
            }
            return await this.userQuery.deleteUser(id);
        }
        catch(error){
            throw error;
        }
    }
}