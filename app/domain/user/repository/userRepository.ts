import { UserQuery } from "../../../infrastructure/query/mysql/user/userQuery";
import { AuthQuery } from "../../../infrastructure/query/mysql/user/authQuery";

export class UserRepository {
    private userQuery: UserQuery;
    private authQuery: AuthQuery;

    constructor() {
        this.userQuery = new UserQuery();
        this.authQuery = new AuthQuery();
    }

    async getAllUser(limit: number, offset: number) {
        try{
            return await this.userQuery.getAllUser(limit, offset);
        }
        catch(err){
            throw err;
        }
    }

    async getUserById(id: string) {
        try{
            return await this.userQuery.getUserById(id);
        }
        catch(err){
            throw err;
        }
    }

    async findUserByEmail(email: string) {
        try{
            return await this.authQuery.findUserByEmail(email);
        }
        catch(err){
            throw err;
        }
    }
}