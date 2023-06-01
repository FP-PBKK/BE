import { BookingQuery } from "../../../infrastructure/query/mysql/booking/bookingQuery";
import { UserQuery } from "../../../infrastructure/query/mysql/user/userQuery";
import { PackageQuery } from "../../../infrastructure/query/mysql/booking/packageQuery";
import { ScheduleQuery } from "../../../infrastructure/query/mysql/booking/scheduleQuery";

export class BookingRepository {
    private bookingQuery: BookingQuery;
    private userQuery: UserQuery;
    private packageQuery: PackageQuery;
    private scheduleQuery: ScheduleQuery;

    constructor(){
        this.bookingQuery = new BookingQuery();
        this.userQuery = new UserQuery();
        this.packageQuery = new PackageQuery();
        this.scheduleQuery = new ScheduleQuery();
    }

    async getAllBooking(){
        try{
            const bookingData = await this.bookingQuery.getAllBooking();
            //loop for find child data
            for(let i = 0; i < bookingData.length; i++){
                //user
                if(bookingData[i].idUser){
                    console.log(bookingData[i].idUser);
                    const userData = await this.userQuery.getUserById(bookingData[i].idUser as string);
                    bookingData[i].user = userData;
                }                
                //package
                if(bookingData[i].idPackage){
                    console.log(bookingData[i].idPackage);
                    const packageData = await this.packageQuery.getPackageById(bookingData[i].idPackage as string);
                    bookingData[i].packagePhoto = packageData;
                }          
                //schedule
                if(bookingData[i].idSchedule){
                    console.log(bookingData[i].idSchedule);
                    const scheduleData = await this.scheduleQuery.getScheduleById(bookingData[i].idSchedule as string);
                    bookingData[i].schedule = scheduleData;
                }                
            }
            return bookingData;
        }
        catch(err){
            throw err;
        }
    }
}