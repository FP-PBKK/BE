import express, {Request, Response} from "express";
const router = express.Router();

import { PackageController } from "../controller/booking/packageController";
import { ScheduleController } from "../controller/booking/scheduleController";

export class BookingRoute {
    private packageController: PackageController;
    private scheduleController: ScheduleController;

    constructor() {
        this.packageController = new PackageController();
        this.scheduleController = new ScheduleController();
    }

    public get routes() {
        //schedule
        router.get("/schedules", this.scheduleController.getAllSchedule);
        router.post("/schedulebyid", this.scheduleController.getScheduleById);
        router.post("/schedulebydatetime", this.scheduleController.getScheduleByDateTime);

        //package
        router.get("/packages", this.packageController.getAllPackage);
        router.post("/packagebyid", this.packageController.getPackageById);
        
        return router;
    }
}