import { FeedbackQuery } from "../../../infrastructure/query/mysql/booking/feedbackQuery";

export class FeedbackRepository {
    private feedbackQuery: FeedbackQuery;

    constructor(){
        this.feedbackQuery = new FeedbackQuery();
    }

    async getFeedbacks(){
        try{
            return await this.feedbackQuery.getFeedbacks();
        }
        catch(err){
            throw err;
        }
    }

    async getFeedbackById(id: string){
        try{
            return await this.feedbackQuery.getFeedbackById(id);
        }
        catch(err){
            throw err;
        }
    }

    async getFeedbackByUserId(userId: string){
        try{
            return await this.feedbackQuery.getFeedbackByUserId(userId);
        }
        catch(err){
            throw err;
        }
    }
}