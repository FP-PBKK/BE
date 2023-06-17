import express, {Request, Response} from "express";
const router = express.Router();
import { UserController } from "../controller/user/userController";
import { RoleController } from "../controller/user/roleController";
import { AuthController } from "../controller/user/authController";

export class UserRoute {
    private userController: UserController;
    private roleController: RoleController;
    private authController: AuthController;

    constructor() {
        this.userController = new UserController();
        this.roleController = new RoleController();
        this.authController = new AuthController();
    }

    public get routes() {
        //user
        router.get("/", this.userController.getAllUser);
        router.get("/id/:id", this.userController.getUserById);
        router.post("/", this.userController.createUser);
        router.put("/update/:id", this.userController.updateUser);
        router.delete("/delete/:id", this.userController.deleteUser);

        //role
        router.get("/roles", this.roleController.getAllRole);
        router.post("/role", this.roleController.createRole);

        //auth
        router.post("/login", this.authController.login);
        router.post("/register", this.authController.register);
        router.get("/whoami", this.authController.whoami);
        
        return router;
    }
}