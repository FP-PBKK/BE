import { AdditionalItemDTO } from "./additionalItemDTO";

export interface AdditionalItemInterface {
    getAllAdditionalItem(): Promise<AdditionalItemDTO[]>;
}