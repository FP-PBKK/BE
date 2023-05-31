import express, {Express} from "express";
const app: Express = express();
const cors = require('cors');
const multer = require('multer');
const morgan = require('morgan');
import { UserRoute } from "./routers/userRoute";
import { BookingRoute } from "./routers/bookingRoute";

// Add CORS middleware
app.use(cors());

// Middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// for parsing multipart/form-data
app.use(multer().array());
app.use(express.static('public'));

// Morgan logging middleware
app.use(morgan('combined'));

const userRoute = new UserRoute();
const bookingRoute = new BookingRoute();

//routes
app.use("/api/user", userRoute.routes);
app.use("/api/booking", bookingRoute.routes);

export { app };