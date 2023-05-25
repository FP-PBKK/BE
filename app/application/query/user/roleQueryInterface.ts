import { RoleDTO } from "./roleDTO";

export interface RoleQueryInterface {
    getAllRole(): Promise<RoleDTO[]>;

    createRole(data: Array<any>): Promise<any>;
}