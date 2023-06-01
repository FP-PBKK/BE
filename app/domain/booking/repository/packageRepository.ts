import { PackageQuery } from "../../../infrastructure/query/mysql/booking/packageQuery";

export class PackageRepository{
    private packageQuery: PackageQuery;

    constructor() {
        this.packageQuery = new PackageQuery();
    }

    async getAllPackage(){
        try{
            return this.packageQuery.getAllPackage();
        }
        catch(err){
            throw err;
        }
        
    }

    async getPackageById(id: string){
        try{
            return this.packageQuery.getPackageById(id);
        }
        catch(err){
            throw err;
        }
    }
}