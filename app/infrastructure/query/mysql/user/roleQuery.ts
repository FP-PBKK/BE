import {RoleQueryInterface} from "../../../../application/query/user/roleQueryInterface";
import {RoleDTO} from "../../../../application/query/user/roleDTO";
import {sequelize} from "../../../../../config/database";

export class RoleQuery implements RoleQueryInterface {
    
    async getAllRole(): Promise<RoleDTO[]> {
        try{
            const sql = `SELECT * FROM roles`;
            const fetchData = sequelize.query(sql);
            return fetchData.then((res: any) => {
                const data: RoleDTO[] = [];
                if(!res[0]){
                    return data;
                }
                res[0].forEach((element: any) => {
                    data.push(new RoleDTO(element.id, element.name));
                });
                return data;
            });
        }
        catch(err){
            throw err;
        }
    }

    async createRole(data: Array<any>){
        try{
            const sql = `INSERT INTO roles (id, name, createdAt, updatedAt) VALUES (?, ?, ?, ?)`;
            const response = sequelize.query(sql, {
                replacements: data
            });
            return response.then((res: any) => {
                return res[1];
            }); 
        }
        catch(err){
            throw err;
        }
    }
}