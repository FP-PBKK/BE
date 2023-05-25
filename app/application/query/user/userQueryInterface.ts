import { UserDTO } from "./userDTO";

export interface UserQueryInterface {
    getAllUser(): Promise<UserDTO[]>;

    getUserById(id: number): Promise<UserDTO>;

    createUser(data: Array<any>): Promise<any>;
}