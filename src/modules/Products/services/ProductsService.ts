import { productsRepository } from "../repositories/productsRepository"

class ProductsService {
    async create(input: any): Promise<void> {
        const repository = productsRepository;

       if (input.name.lengh <= 0 ) return;

        const productAlredyExists = await repository.findOne({
            where: {
                name: input.name,
                fornecedor: input.fornecedor
            }
        });

        if (productAlredyExists) return;

        const product = repository.create(input);
        await repository.save(product);
    }
}

export { ProductsService }