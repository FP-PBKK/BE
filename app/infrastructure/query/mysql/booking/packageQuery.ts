import { PackageQueryInterface } from "../../../../application/query/booking/packageQueryInterface";
import { PackageDTO } from "../../../../application/query/booking/packageDTO";
import { sequelize } from "../../../../../config/database";

export class PackageQuery implements PackageQueryInterface {

    async getAllPackage(): Promise<PackageDTO[]> {
        try{
            const sql = `SELECT * FROM packages`;
            const fetchData = sequelize.query(sql);
            return fetchData.then((res: any) => {
                const data: PackageDTO[] = [];
                res[0].forEach((element: any) => {
                    data.push(new PackageDTO(element.id, element.name, element.price, element.description));
                });
                return data;
            }); 
        }
        catch(err){
            throw err;
        }       
    }

    async getPackageById(id: string): Promise<PackageDTO> {
        try{
            const sql = `SELECT * FROM packages WHERE id = ?`;
            const fetchData = sequelize.query(sql, {
                replacements: [id]
            });
            return fetchData.then((res: any) => {
                const data: PackageDTO = new PackageDTO(res[0][0].id, res[0][0].name, res[0][0].price, res[0][0].description);
                return data;
            });
        }
        catch(err){
            throw err;
        }
    }
}