import { UserDTO } from "./userDTO";

export interface UserQueryInterface {
    getAllUser(limit: number, offset: number): Promise<UserDTO[]>;

    getUserById(id: string): Promise<UserDTO>;

    createUser(data: Array<any>): Promise<any>;
}