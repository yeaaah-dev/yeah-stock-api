import { supplierInputDto } from "../Dtos/supplierInputDto";
import { supplierOutputDto } from "../Dtos/supplierOutputDto";
import { Supplier } from "../entities/Supplier";
import { suppliersRepository } from "../repositories/suppliersRepository"

class DeleteSuppliersService {
    async execute(id: string): Promise<void>  {        
        const supplier = await suppliersRepository.findOne({
            where: {
                id
            }
        });
        
        await suppliersRepository.remove(supplier);
    }
}

export { DeleteSuppliersService }