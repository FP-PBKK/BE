import { RoleQuery } from "../../../infrastructure/query/mysql/user/roleQuery";

export class RoleRepository {
    private roleQuery: RoleQuery;

    constructor() {
        this.roleQuery = new RoleQuery();
    }

    async getAllRole() {
        try{
            return this.roleQuery.getAllRole();
        }
        catch(err){
            throw err;
        }
    }
}