import { FeedbackDTO } from "./feedBackDTO";

export interface FeedbackQueryInterface{
    getFeedbacks(): Promise<FeedbackDTO[]>;
    getFeedbackById(id: string): Promise<FeedbackDTO>;
    createFeedback(feedback: FeedbackDTO): Promise<any>;
}