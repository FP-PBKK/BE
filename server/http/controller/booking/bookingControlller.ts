import { BookingService } from "../../../../app/domain/booking/service/bookingService";
import { BookingCommand } from "../../../../app/domain/booking/command/bookingCommand";
import { BookingRepository } from "../../../../app/domain/booking/repository/bookingRepository";
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
            if(bookingData.id.length == 0){
                return res.status(404).json({
                    status: 404,
                    message: "Not Found",
                    data: {}
                });
            }
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

    async getBookingByUserId(req: Request, res: Response){
        try{
            const {userId} = req.params;
            const bookingData = await new BookingRepository().getBookingByUserId(userId);
            if(bookingData.length == 0){
                return res.status(404).json({
                    status: 404,
                    message: "Not Found",
                    data: {}
                });
            }
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

    async updateBookingStatus(req: Request, res: Response){
        try{
            const {id} = req.params;
            const {status} = req.body;
            const bookingData = await new BookingCommand().updateBookingStatus(id, status);
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