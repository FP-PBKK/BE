import { UserQuery } from "../../../infrastructure/query/mysql/user/userQuery";

export class UserRepository {
    private userQuery: UserQuery;

    constructor() {
        this.userQuery = new UserQuery();
    }

    async getAllUser() {
        return await this.userQuery.getAllUser();
    }

    async getUserById(id: number) {
        return await this.userQuery.getUserById(id);
    }
}