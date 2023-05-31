import { PackageDTO } from "./packageDTO";

export interface PackageQueryInterface{
    getAllPackage(): Promise<PackageDTO[]>;
    getPackageById(id: string): Promise<PackageDTO>;
}