import { Address } from "../../Address/entities/Address";
import { Supplier } from "../entities/Supplier";

class supplierOutputDto {
    name: string;
    address: Address;

    constructor(input: Supplier) {
        this.name = input.name;
    }
}

export { supplierOutputDto }