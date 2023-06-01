import { BookingService } from "../../../../app/domain/booking/service/bookingService";
import { Request, Response } from "express";

export class BookingController {

    async getAllBooking(req: Request, res: Response){
        try{
            const bookingData = await new BookingService().getAllBookingsAndReferences();
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

    async getBookingById(req: Request, res: Response){
        try{
            const {bookingId} = req.body;
            const bookingData = await new BookingService().getBookingByIdAndReferences(bookingId);
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