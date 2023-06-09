import express, {Request, Response} from "express";
const router = express.Router();

import { PackageController } from "../controller/booking/packageController";
import { ScheduleController } from "../controller/booking/scheduleController";
import { AdditionalItemController } from "../controller/booking/additioanlController";
import { BookingController } from "../controller/booking/bookingControlller";
import { FeedbackController } from "../controller/booking/feedbackController";

export class BookingRoute {
    private packageController: PackageController;
    private scheduleController: ScheduleController;
    private additionalItemController: AdditionalItemController;
    private bookingController: BookingController;
    private feedbackController: FeedbackController;

    constructor() {
        this.packageController = new PackageController();
        this.scheduleController = new ScheduleController();
        this.additionalItemController = new AdditionalItemController();
        this.bookingController = new BookingController();
        this.feedbackController = new FeedbackController();
    }

    public get routes() {
        //schedule
        router.get("/schedules", this.scheduleController.getAllSchedule);
        router.get("/schedule/id/:id", this.scheduleController.getScheduleById);
        router.get("/schedule/time/:time", this.scheduleController.getScheduleByTime);
        router.get("/schedule/booked/:date", this.scheduleController.getBookedScheduleByDate);
        router.post("/schedule", this.scheduleController.createSchedule);
        router.delete("/schedule/:id", this.scheduleController.deleteSchedule);

        //package
        router.get("/packages", this.packageController.getAllPackage);
        router.get("/package/id/:id", this.packageController.getPackageById);

        //additional item
        router.get("/additionalitems", this.additionalItemController.getAllAdditionalItem);

        //booking
        router.get("/bookings", this.bookingController.getAllBooking);
        router.get("/booking/id/:id", this.bookingController.getBookingById);
        router.get("/booking/user/:userId", this.bookingController.getBookingByUserId);
        router.post("/booking", this.bookingController.createBooking);
        router.put("/booking_status/:id", this.bookingController.updateBookingStatus);

        //feedback
        router.get("/feedbacks", this.feedbackController.getFeedbacks);
        router.get("/feedback/id/:id", this.feedbackController.getFeedbackById);
        router.get("/feedback/user/:userId", this.feedbackController.getFeedbackByUserId);
        router.post("/feedback", this.feedbackController.createFeedback);
        router.put("/feedback/id/:id", this.feedbackController.updateFeedback);
        router.delete("/feedback/id/:id", this.feedbackController.deleteFeedback);
        
        return router;
    }
}