import { UserQueryInterface } from "../../../../application/query/user/userQueryInterface";
import { UserDTO } from "../../../../application/query/user/userDTO";
import { sequelize } from "../../../../../config/database";

export class UserQuery implements UserQueryInterface {
    
    async getAllUser(): Promise<UserDTO[]> {
        const sql = `SELECT users.*, roles.name AS role_name
                        FROM users
                        LEFT JOIN roles ON users.role_id = roles.id
                        `;
        const fetchData = sequelize.query(sql);
        return fetchData.then((res: any) => {
            const data: UserDTO[] = [];
            res[0].forEach((element: any) => {
                data.push(new UserDTO(element.id, element.name, element.email, element.role_name));
            });
            return data;
        });
    }

    async getUserById(id: number): Promise<UserDTO> {
        const sql = `SELECT users.*, roles.name AS role_name
                        FROM users
                        LEFT JOIN roles ON users.role_id = roles.id
                        WHERE users.id = ?
                        `;
        const fetchData = sequelize.query(sql, {
            replacements: [id]
        });
        return fetchData.then((res: any) => {
            const data: UserDTO = new UserDTO(res[0][0].id, res[0][0].name, res[0][0].email, res[0][0].role_name);
            return data;
        });
    }

    async findUserByEmail(email: string): Promise<UserDTO> {
        const sql = `SELECT users.*, roles.name AS role_name
                        FROM users
                        LEFT JOIN roles ON users.role_id = roles.id
                        WHERE users.email = ?
                        `;
        const fetchData = sequelize.query(sql, {
            replacements: [email]
        });
        return fetchData.then((res: any) => {
            const data: UserDTO = new UserDTO(res[0][0].id, res[0][0].name, res[0][0].email, res[0][0].role_name);
            return data;
        });
    }

    async createUser(data: Array<any>){
        const sql = `INSERT INTO users (id, role_id, name, email, password, phone_number, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        const response = sequelize.query(sql, {
            replacements: data
        });
        return response.then((res: any) => {
            return res[1];
        });      
    }
}