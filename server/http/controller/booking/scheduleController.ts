import { ScheduleRepository } from "../../../../app/domain/booking/repository/scheduleRepository";
import {Request, Response} from "express";

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
            const {id} = req.body;
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

    async getScheduleByDateTime(req: Request, res: Response) {
        try {
            const {date, time} = req.body;
            const data = await new ScheduleRepository().getScheduleByDateTime(date, time);
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