import { BookingService } from "../../../../app/domain/booking/service/bookingService";
import { BookingCommand } from "../../../../app/domain/booking/command/bookingCommand";
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
            const {id} = req.params;
            const bookingData = await new BookingService().getBookingByIdAndReferences(id);
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

    async createBooking(req: Request, res: Response){
        try{
            const bookingData = await new BookingCommand().createBooking(req.body);
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