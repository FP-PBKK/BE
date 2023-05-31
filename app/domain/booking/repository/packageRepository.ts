import { PackageQuery } from "../../../infrastructure/query/mysql/booking/packageQuery";

export class PackageRepository{
    private packageQuery: PackageQuery;

    constructor() {
        this.packageQuery = new PackageQuery();
    }

    async getAllPackage(){
        return this.packageQuery.getAllPackage();
    }

    async getPackageById(id: string){
        return this.packageQuery.getPackageById(id);
    }
}