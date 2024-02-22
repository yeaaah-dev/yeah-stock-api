import { supplierInputDto } from "../Dtos/supplierInputDto";
import { supplierOutputDto } from "../Dtos/supplierOutputDto";
import { Supplier } from "../entities/Supplier";
import { suppliersRepository } from "../repositories/suppliersRepository"

class CreateSuppliersService {
    async execute(input: supplierInputDto): Promise<supplierOutputDto>  {
        if (input.name.length <= 0 ) return;
        
        const supplierAlredyExists = await suppliersRepository.findOne({
            where: {
                name: input.name
            }
        });
        
        if (supplierAlredyExists) return;

        const supplier = suppliersRepository.create({
            name: input.name,
        });
        await suppliersRepository.save(supplier);

        const output = new supplierOutputDto(supplier);
        return output;
    }
}

export { CreateSuppliersService }