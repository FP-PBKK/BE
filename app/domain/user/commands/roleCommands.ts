import { RoleQuery } from "../../../infrastructure/query/mysql/user/roleQuery";
import { RoleModel } from "../models/roleModel";
import { generateRoleId } from "../../../shared/generateId";

export class RoleCommand{
    private roleQuery: RoleQuery;

    constructor() {
        this.roleQuery = new RoleQuery();
    }

    async createRole(data: any) {
        try{
            data.id = generateRoleId();
            const roleModel = new RoleModel(data.id, data.name);
            return await this.roleQuery.createRole(roleModel.getDataRoleArr());
        }
        catch(error){
            return error;
        }
    }
}