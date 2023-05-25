import express, {Request, Response} from "express";
const router = express.Router();
import { UserController } from "../controller/user/userController";
import { RoleController } from "../controller/user/roleController";

export class UserRoute {
    private userController: UserController;
    private roleController: RoleController;

    constructor() {
        this.userController = new UserController();
        this.roleController = new RoleController();
    }

    public get routes() {
        // const controller = this.userController;
        router.get("/", this.userController.getAllUser);
        router.get("/search", this.userController.getUserById);
        router.post("/", this.userController.createUser);
        router.get("/roles", this.roleController.getAllRole);
        router.post("/role", this.roleController.createRole);
        return router;
    }
}