import { RoleQuery } from "../../../infrastructure/query/mysql/user/roleQuery";

export class RoleRepository {
    private roleQuery: RoleQuery;

    constructor() {
        this.roleQuery = new RoleQuery();
    }

    async getAllRole() {
        return this.roleQuery.getAllRole();
    }
}