import { AppError } from "../../../shared/errors/AppError";
import { addressRepository } from "../../Address/repositories/addressRepository";
import { supplierInputDto } from "../Dtos/supplierInputDto";
import { supplierOutputDto } from "../Dtos/supplierOutputDto";
import { Supplier } from "../entities/Supplier";
import { suppliersRepository } from "../repositories/suppliersRepository"

class GetSuppliersService {
    async execute(): Promise<Supplier[]>  {
        
        const suppliers = await suppliersRepository.find({
            relations: {
                address: true
            }
        });
        
        return suppliers;
    }
}

export { GetSuppliersService }