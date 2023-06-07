import express, {Request, Response} from "express";
const router = express.Router();

import { PackageController } from "../controller/booking/packageController";
import { ScheduleController } from "../controller/booking/scheduleController";
import { AdditionalItemController } from "../controller/booking/additioanlController";
import { BookingController } from "../controller/booking/bookingControlller";

export class BookingRoute {
    private packageController: PackageController;
    private scheduleController: ScheduleController;
    private additionalItemController: AdditionalItemController;
    private bookingController: BookingController;

    constructor() {
        this.packageController = new PackageController();
        this.scheduleController = new ScheduleController();
        this.additionalItemController = new AdditionalItemController();
        this.bookingController = new BookingController();
    }

    public get routes() {
        //schedule
        router.get("/schedules", this.scheduleController.getAllSchedule);
        router.get("/schedule/id/:id", this.scheduleController.getScheduleById);
        router.get("/schedulebytime", this.scheduleController.getScheduleByTime);
        router.get("/schedule/booked", this.scheduleController.getBookedScheduleByDate);

        //package
        router.get("/packages", this.packageController.getAllPackage);
        router.get("/package/id/:id", this.packageController.getPackageById);

        //additional item
        router.get("/additionalitems", this.additionalItemController.getAllAdditionalItem);

        //booking
        router.get("/bookings", this.bookingController.getAllBooking);
        router.get("/booking/:id", this.bookingController.getBookingById);
        
        return router;
    }
}