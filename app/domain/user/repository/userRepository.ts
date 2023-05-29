import { UserQuery } from "../../../infrastructure/query/mysql/user/userQuery";
import { AuthQuery } from "../../../infrastructure/query/mysql/user/authQuery";

export class UserRepository {
    private userQuery: UserQuery;
    private authQuery: AuthQuery;

    constructor() {
        this.userQuery = new UserQuery();
        this.authQuery = new AuthQuery();
    }

    async getAllUser() {
        return await this.userQuery.getAllUser();
    }

    async getUserById(id: number) {
        return await this.userQuery.getUserById(id);
    }

    async findUserByEmail(email: string) {
        return await this.authQuery.findUserByEmail(email);
    }
}