import { FeedbackDTO } from "./feedBackDTO";

export interface FeedbackQueryInterface{
    getFeedbacks(): Promise<FeedbackDTO[]>;
    getFeedbackById(id: string): Promise<FeedbackDTO>;
    getFeedbackByUserId(userId: string): Promise<FeedbackDTO[]>;
    createFeedback(feedback: FeedbackDTO): Promise<any>;
    updateFeedback(id: string, feedback: FeedbackDTO): Promise<any>;
    deleteFeedback(id: string): Promise<any>;
}