import { ScheduleRepository } from "../../../../app/domain/booking/repository/scheduleRepository";
import { BookingService } from "../../../../app/domain/booking/service/bookingService";
import {Request, Response} from "express";
import { ScheduleService } from "../../../../app/domain/booking/service/scheduleService";

export class ScheduleController {

    async getAllSchedule(req: Request, res: Response) {
        try {
            const data = await new ScheduleRepository().getAllSchedule();
            res.status(200).send({
                status: 200,
                message: "Success",
                data: data
            });
        } catch (error) {
            res.status(500).send({
                status: 500,
                message: "Internal Server Error",
                data: error
            });
        }
    }

    async getScheduleById(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const data = await new ScheduleRepository().getScheduleById(id);
            res.status(200).send({
                status: 200,
                message: "Success",
                data: data
            });
        } catch (error) {
            res.status(500).send({
                status: 500,
                message: "Internal Server Error",
                data: error
            });
        }
    }

    async getScheduleByTime(req: Request, res: Response) {
        try {
            const {time} = req.body;
            const data = await new ScheduleRepository().getScheduleByTime(time);
            res.status(200).send({
                status: 200,
                message: "Success",
                data: data
            });
        } catch (error) {
            res.status(500).send({
                status: 500,
                message: "Internal Server Error",
                data: error
            });
        }
    }

    async getBookedScheduleByDate(req: Request, res: Response) {
        try {
            const {date} = req.body;
            const data = await new ScheduleService().getBookedScheduleByDate(date);
            res.status(200).send({
                status: 200,
                message: "Success",
                data: data
            });
        } catch (error) {
            res.status(500).send({
                status: 500,
                message: "Internal Server Error",
                data: error
            });
        }
    }
}