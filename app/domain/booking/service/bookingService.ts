import { BookingRepository } from "../repository/bookingRepository";
import { UserRepository } from "../../user/repository/userRepository";
import { PackageRepository } from "../repository/packageRepository";
import { ScheduleRepository } from "../repository/scheduleRepository";
import { BookingAdditionalItemRepository } from "../repository/bookingAdditionalItemRepository";
import { TransactionRepository } from "../../transaction/repository/transactionRepository";

export class BookingService {
    private bookingRepository: BookingRepository;
    private userRepository: UserRepository;
    private packageRepository: PackageRepository;
    private scheduleRepository: ScheduleRepository;
    private bookingAdditionalItemRepository: BookingAdditionalItemRepository;
    private transactionRepository: TransactionRepository;

    constructor(){
        this.bookingRepository = new BookingRepository();
        this.userRepository = new UserRepository();
        this.packageRepository = new PackageRepository();
        this.scheduleRepository = new ScheduleRepository();
        this.bookingAdditionalItemRepository = new BookingAdditionalItemRepository();
        this.transactionRepository = new TransactionRepository();
    }

    async getAllBookingsAndReferences(limit: number, offset: number){
        try{
            const bookingData = await this.bookingRepository.getAllBooking(limit, offset);
            //loop for find child data
            for(let i = 0; i < bookingData.length; i++){
                //user
                if(bookingData[i].idUser){
                    const userData = await this.userRepository.getUserById(bookingData[i].idUser as string);
                    bookingData[i].user = userData;
                }                
                //package
                if(bookingData[i].idPackage){
                    const packageData = await this.packageRepository.getPackageById(bookingData[i].idPackage as string);
                    bookingData[i].packagePhoto = packageData;
                }          
                //schedule
                if(bookingData[i].idSchedule){
                    const scheduleData = await this.scheduleRepository.getScheduleById(bookingData[i].idSchedule as string);
                    bookingData[i].schedule = scheduleData;
                }
                //additional item
                if(bookingData[i].id){
                    const additionalItemData = await this.bookingAdditionalItemRepository.getBookingAdditionalItemByBookingId(bookingData[i].id as string);
                    bookingData[i].additionalItem = additionalItemData;
                }
            }
            return bookingData;
        }
        catch(err){
            throw err;
        }
    }

    async getBookingByIdAndReferences(id: string){
        try{
            const bookingData = await this.bookingRepository.getBookingById(id);
            //user
            if(bookingData.idUser){
                const userData = await this.userRepository.getUserById(bookingData.idUser as string);
                bookingData.user = userData;
            }                
            //package
            if(bookingData.idPackage){
                const packageData = await this.packageRepository.getPackageById(bookingData.idPackage as string);
                bookingData.packagePhoto = packageData;
            }          
            //schedule
            if(bookingData.idSchedule){
                const scheduleData = await this.scheduleRepository.getScheduleById(bookingData.idSchedule as string);
                bookingData.schedule = scheduleData;
            }
            //additional item
            if(bookingData.id){
                const additionalItemData = await this.bookingAdditionalItemRepository.getBookingAdditionalItemByBookingId(bookingData.id as string);
                bookingData.additionalItem = additionalItemData;
            }
            return bookingData;
        }
        catch(err){
            throw err;
        }
    }

    async getBookingByUserIdAndReferences(userId: string){
        try{
            const bookingData = await this.bookingRepository.getBookingByUserId(userId);
            //loop for find child data
            for(let i = 0; i < bookingData.length; i++){
                //user
                if(bookingData[i].idUser){
                    const userData = await this.userRepository.getUserById(bookingData[i].idUser as string);
                    bookingData[i].user = userData;
                }                
                //package
                if(bookingData[i].idPackage){
                    const packageData = await this.packageRepository.getPackageById(bookingData[i].idPackage as string);
                    bookingData[i].packagePhoto = packageData;
                }          
                //schedule
                if(bookingData[i].idSchedule){
                    const scheduleData = await this.scheduleRepository.getScheduleById(bookingData[i].idSchedule as string);
                    bookingData[i].schedule = scheduleData;
                }
                //additional item
                if(bookingData[i].id){
                    const additionalItemData = await this.bookingAdditionalItemRepository.getBookingAdditionalItemByBookingId(bookingData[i].id as string);
                    bookingData[i].additionalItem = additionalItemData;
                }
            }
            return bookingData;
        }
        catch(err){
            throw err;
        }
    }
}