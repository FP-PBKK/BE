import { AuthQueryInterface } from "../../../../application/query/user/authQueryInterface";
import { AuthDTO } from "../../../../application/query/user/authDTO";
import { sequelize } from "../../../../../config/database";

export class AuthQuery implements AuthQueryInterface {

    async findUserByEmail(email: string): Promise<AuthDTO> {
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
                return new AuthDTO("", "", "");
            }
            const data: AuthDTO = new AuthDTO(res[0][0].email, res[0][0].role_name, res[0][0].password);
            return data;
        });
    }
}