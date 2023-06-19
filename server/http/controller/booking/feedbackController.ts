import { FeedbackRepository } from "../../../../app/domain/booking/repository/feedbackRepository";
import { FeedbackCommmand } from "../../../../app/domain/booking/command/feedbackCommand";
import {Request, Response} from "express";

export class FeedbackController {
    public getFeedbacks = async (req: Request, res: Response) => {
        try{
            const data = await new FeedbackRepository().getFeedbacks();
            res.status(200).send({
                status: 200,
                message: "Success",
                data: data
            });
        }
        catch(err){
            res.status(500).send({
                status: 500,
                message: "Internal Server Error",
                data: err
            });
        }
    }

    public getFeedbackById = async (req: Request, res: Response) => {
        try{
            const {id} = req.params;
            const data = await new FeedbackRepository().getFeedbackById(id);
            res.status(200).send({
                status: 200,
                message: "Success",
                data: data
            });
        }
        catch(err){
            res.status(500).send({
                status: 500,
                message: "Internal Server Error",
                data: err
            });
        }
    }

    public getFeedbackByUserId = async (req: Request, res: Response) => {
        try{
            const {userId} = req.params;
            const data = await new FeedbackRepository().getFeedbackByUserId(userId);
            res.status(200).send({
                status: 200,
                message: "Success",
                data: data
            });
        }
        catch(err){
            res.status(500).send({
                status: 500,
                message: "Internal Server Error",
                data: err
            });
        }
    }

    public createFeedback = async (req: Request, res: Response) => {
        try{
            const data = await new FeedbackCommmand().createFeedback(req.body);
            res.status(200).send({
                status: 200,
                message: "Success",
                data: data
            });
        }
        catch(err){
            res.status(500).send({
                status: 500,
                message: "Internal Server Error",
                data: err
            });
        }
    }

    public updateFeedback = async (req: Request, res: Response) => {
        try{
            const {id} = req.params;
            const data = await new FeedbackCommmand().updateFeedback(id, req.body);
            res.status(200).send({
                status: 200,
                message: "Success",
                data: data
            });
        }
        catch(err){
            res.status(500).send({
                status: 500,
                message: "Internal Server Error",
                data: err
            });
        }
    }

    public deleteFeedback = async (req: Request, res: Response) => {
        try{
            const {id} = req.params;
            const data = await new FeedbackCommmand().deleteFeedback(id);
            res.status(200).send({
                status: 200,
                message: "Success",
                data: data
            });
        }
        catch(err){
            res.status(500).send({
                status: 500,
                message: "Internal Server Error",
                data: err
            });
        }
    }
}
