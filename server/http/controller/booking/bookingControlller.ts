import { BookingRepository } from "../../../../app/domain/booking/repository/bookingRepository";
import { Request, Response } from "express";

export class BookingController {

    async getAllBooking(req: Request, res: Response){
        try{
            const bookingData = await new BookingRepository().getAllBooking();
            return res.status(200).json({
                status: 200,
                message: "Success",
                data: bookingData
            });
        }
        catch(err){
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                data: err
            });
        }
    }
}