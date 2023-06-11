import { ScheduleRepository } from "../../../../app/domain/booking/repository/scheduleRepository";
import { BookingService } from "../../../../app/domain/booking/service/bookingService";
import {Request, Response} from "express";
import { ScheduleService } from "../../../../app/domain/booking/service/scheduleService";
import { ScheduleCommand } from "../../../../app/domain/booking/command/scheduleCommand";

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
            const {time} = req.params;
            const data = await new ScheduleRepository().getScheduleByTime(time as string);
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
            const {date} = req.params;
            const data = await new ScheduleService().getBookedScheduleByDate(date as string);
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

    async createSchedule(req: Request, res: Response) {
        try {
            const {time} = req.body;
            const data = await new ScheduleCommand().createSchedule(time);
            res.status(201).send({
                status: 201,
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

    async deleteSchedule(req: Request, res: Response) {
        try {
            const {id} = req.params;
            const data = await new ScheduleCommand().deleteSchedule(id);
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