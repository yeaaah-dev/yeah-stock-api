import { AppError } from "../../../shared/errors/AppError";
import { addressRepository } from "../../Address/repositories/addressRepository";
import { supplierInputDto } from "../Dtos/supplierInputDto";
import { supplierOutputDto } from "../Dtos/supplierOutputDto";
import { Supplier } from "../entities/Supplier";
import { suppliersRepository } from "../repositories/suppliersRepository"

class CreateSuppliersService {
    async execute(input: supplierInputDto): Promise<supplierOutputDto>  {
        if (input.name?.length <= 0 ) throw new AppError("Unprocessable Entity!", 422);
        if (!input.addressId || input.addressId?.length <= 0 ) throw new AppError("Unprocessable Entity!", 422);
        
        const supplierAlredyExists = await suppliersRepository.findOne({
            where: {
                name: input.name
            }
        });
        
        if (supplierAlredyExists) return;

        const address = await addressRepository.findOne({
            where: {
                id: input.addressId
            }
        });

        if (!address) throw new AppError("Address not found!", 404);

        const supplier = suppliersRepository.create({
            name: input.name,
            address: address
        });
        await suppliersRepository.save(supplier);

        const output = new supplierOutputDto(supplier);
        return output;
    }
}

export { CreateSuppliersService }