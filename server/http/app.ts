import express, {Express} from "express";
const app: Express = express();
import { UserRoute } from "./routers/userRoute";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoute = new UserRoute();

app.use("/api/user", userRoute.routes);

export { app };