import { FeedbackDTO } from "../../../../application/query/booking/feedBackDTO";
import { FeedbackQueryInterface } from "../../../../application/query/booking/feedbackQueryInterface";
import { sequelize } from "../../../../../config/database";

export class FeedbackQuery implements FeedbackQueryInterface{
    async getFeedbacks(): Promise<FeedbackDTO[]> {
        try{
            const sql = `SELECT * FROM feedbacks
                        ORDER BY createdAt ASC`;
            const fetchData = await sequelize.query(sql);
            const feedbackData: FeedbackDTO[] = [];
            if(!fetchData[0]){
                return feedbackData;
            }
            fetchData[0].forEach((element: any) => {
                feedbackData.push(new FeedbackDTO(element.id, element.user_id, element.booking_id, element.comment, element.rate, element.createdAt, element.updatedAt));
            });
            return feedbackData;
        }
        catch(err){
            throw err;
        }
    }

    async getFeedbackById(id: string): Promise<FeedbackDTO> {
        try{
            const sql = `SELECT * FROM feedbacks WHERE id = :id
                        ORDER BY createdAt ASC`;
            const fetchData = sequelize.query(sql, {
                replacements: {
                    id: id
                }
            });
            return fetchData.then((element: any) => {
                if(!element[0][0]){
                    return new FeedbackDTO('', '', '', '', 0, '', '');
                }
                return new FeedbackDTO(element[0][0].id, element[0][0].user_id, element[0][0].booking_id, element[0][0].comment, element[0][0].rate, element[0][0].createdAt, element[0][0].updatedAt);
            });
        }
        catch(err){
            throw err;
        }
    }

    async createFeedback(feedback: any) {
        try{
            const sql = "INSERT INTO feedbacks (id, user_id, booking_id, comment, rate, createdAt, updatedAt) VALUES (:id, :user_id, :booking_id, :comment, :rate, :createdAt, :updatedAt)";
            const response = sequelize.query(sql, {
                replacements: {
                    id: feedback.id,
                    user_id: feedback.user_id,
                    booking_id: feedback.booking_id,
                    comment: feedback.comment,
                    rate: feedback.rate,
                    createdAt: feedback.created_at,
                    updatedAt: feedback.updated_at
                }
            });
            console.log(response);
            return response.then((element: any) => {
                return element[1];
            });
        }
        catch(err){
            throw err;
        }
    }

    async getFeedbackByUserId(userId: string): Promise<FeedbackDTO[]> {
        const sql = `SELECT * FROM feedbacks WHERE user_id = :user_id
                    ORDER BY createdAt ASC`;
        const fetchData = sequelize.query(sql, {
            replacements: {
                user_id: userId
            }
        });
        return fetchData.then((element: any) => {
            const feedbackData: FeedbackDTO[] = [];
            if(!element[0][0]){
                return feedbackData;
            }
            element[0].forEach((element: any) => {
                feedbackData.push(new FeedbackDTO(element.id, element.user_id, element.booking_id, element.comment, element.rate, element.createdAt, element.updatedAt));
            });
            return feedbackData;
        });
    }

    async updateFeedback(id: string, feedback: any): Promise<any> {
        const sql = `UPDATE feedbacks 
                    SET 
                    comment = IF(:comment IS NULL, comment, :comment),
                    rate = IF(:rate IS NULL, rate, :rate),
                    updatedAt = IF(:updatedAt IS NULL, updatedAt, :updatedAt) 
                    WHERE id = :id`;
        const response = sequelize.query(sql, {
            replacements: {
                id: id,
                comment: feedback.comment || null,
                rate: feedback.rate || null,
                updatedAt: feedback.updatedAt || null
            }
        });
        return response.then((element: any) => {
            return element[1];
        });
    }

    async deleteFeedback(id: string): Promise<any> {
        const sql = `DELETE FROM feedbacks WHERE id = :id`;
        const response = sequelize.query(sql, {
            replacements: {
                id: id
            }
        });
        return response.then((element: any) => {
            return element[1];
        });
    }
}