import { AuthDTO } from "./authDTO";

export interface AuthQueryInterface {
    findUserByEmail(email: string): Promise<AuthDTO>;
}