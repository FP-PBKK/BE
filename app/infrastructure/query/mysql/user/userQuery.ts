import { UserQueryInterface } from "../../../../application/query/user/userQueryInterface";
import { UserDTO } from "../../../../application/query/user/userDTO";
import { sequelize } from "../../../../../config/database";

export class UserQuery implements UserQueryInterface {
    
    async getAllUser(limit: number, offset: number): Promise<UserDTO[]> {
        try{
            const sql = `SELECT users.*, roles.name AS role_name
                            FROM users
                            LEFT JOIN roles ON users.role_id = roles.id
                            LIMIT :offset , :limit
                            `;
            const fetchData = sequelize.query(sql, {
                replacements: {
                    limit : limit, 
                    offset : offset
                }
            });
            return fetchData.then((res: any) => {
                const data: UserDTO[] = [];
                if(!res[0]){
                    return data;
                }
                res[0].forEach((element: any) => {
                    data.push(new UserDTO(element.id, element.name, element.email, element.role_name));
                });
                return data;
            });
        }
        catch(err){
            throw err;
        }
    }

    async getUserById(id: string): Promise<UserDTO> {
        try{
            const sql = `SELECT users.*, roles.name AS role_name
                            FROM users
                            LEFT JOIN roles ON users.role_id = roles.id
                            WHERE users.id = ?
                            `;
            const fetchData = sequelize.query(sql, {
                replacements: [id]
            });
            return fetchData.then((res: any) => {
                if(!res[0][0]){
                    return new UserDTO('', '', '', '');
                }
                const data: UserDTO = new UserDTO(res[0][0].id, res[0][0].name, res[0][0].email, res[0][0].role_name);
                return data;
            });
        }
        catch(err){
            throw err;
        }
    }

    async findUserByEmail(email: string): Promise<UserDTO> {
        try{
            const sql = `SELECT users.*, roles.name AS role_name
                            FROM users
                            LEFT JOIN roles ON users.role_id = roles.id
                            WHERE users.email = ?
                            `;
            const fetchData = sequelize.query(sql, {
                replacements: [email]
            });
            return fetchData.then((res: any) => {
                if(!res[0][0]){
                    return new UserDTO('', '', '', '');
                }
                const data: UserDTO = new UserDTO(res[0][0].id, res[0][0].name, res[0][0].email, res[0][0].role_name);
                return data;
            });
        }
        catch(err){
            throw err;
        }
    }

    async createUser(data: Array<any>){
        try{
            const sql = `INSERT INTO users (id, role_id, name, email, password, phone_number, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
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

    async updateUser(id: string, data: any){
        try{
            const sql = `UPDATE users 
                        SET 
                            role_id = IF( :role_id IS NULL, role_id, :role_id), 
                            name = IF(:name IS NULL, name, :name), 
                            email = IF(:email IS NULL, email, :email), 
                            phone_number = IF(:phone_number IS NULL, phone_number, :phone_number),
                            password = IF(:password IS NULL, password, :password), 
                            updatedAt = IF(:updatedAt IS NULL, NOW(), :updatedAt)
                        WHERE id = :id`;
            const response = sequelize.query(sql, {
                replacements: {
                    id: id,
                    role_id: data.role_id || null,
                    name: data.name || null,
                    email: data.email || null,
                    phone_number: data.phone_number || null,
                    password: data.password || null,
                    updatedAt: data.updatedAt || null,
                }
            });
            console.log(response)
            return response.then((res: any) => {
                return res[1];
            }); 
        }
        catch(err){
            throw err;
        }
    }

    async deleteUser(id:string){
        try{
            const sql = `DELETE FROM users WHERE id = ?`;
            const response = sequelize.query(sql, {
                replacements: [id]
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