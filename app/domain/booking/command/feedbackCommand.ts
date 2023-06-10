import { FeedbackQuery } from "../../../infrastructure/query/mysql/booking/feedbackQuery";
import { FeedbackModel } from "../models/feedbackModel";
import { generateFeedbackId } from "../../../shared/generateId";

export class FeedbackCommmand {
    private feedbackQuery: FeedbackQuery;

    constructor(){
        this.feedbackQuery = new FeedbackQuery();
    }

    async createFeedback(data: any){
        try{
            data.id = generateFeedbackId();
            const feedbackModel = new FeedbackModel(data.id, data.user_id, data.booking_id, data.comment, data.rate);
            const createFeedbackRes = await this.feedbackQuery.createFeedback(feedbackModel.getDataFeedback());
            return createFeedbackRes;
        }
        catch(err){
            throw err;
        }
    }
}