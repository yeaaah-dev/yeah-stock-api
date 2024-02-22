import { suppliersRepository } from './../../Suppliers/repositories/suppliersRepository';
import { In } from "typeorm";
import { Product } from "../entities/Product";
import { productsRepository } from "../repositories/productsRepository"

class ProductsService {
    
    async create(input: any): Promise<void> {
        
        if (input.name.length <= 0 ) return;
        
        const productAlredyExists = await productsRepository.findOne({
            where: {
                name: input.name
            }
        });
        
        if (productAlredyExists) return;

        const suppliers = await suppliersRepository.find({
            where: {
                id: In(input.suppliersIds)
            }
        });

        input.suppliers = suppliers;

        const product = productsRepository.create(input);
        await productsRepository.save(product);
    }

    async get(id: string): Promise<Product>{
        const product = await productsRepository.findOne({
            where: {
                id,
            },
            relations: {
                suppliers: true
            }
        });

        if (!product) throw new Error("Product not found!");

        return product;
    }

    async getList(skip: number, take: number): Promise<Product[]>{
        const products = await productsRepository.find({
            skip: skip ,
            take: take,
            relations: {
                suppliers: true
            }
        });

        return products;
    }

    async update(id: string, input: any): Promise<void> {
        const product = await productsRepository.findOne({
            where: {
                id
            }
        });

        if (!product) throw new Error("Product not found!");

        product.name = input.name;
        product.quantity = input.quantity;
        product.mesureUnity = input.mesureUnity;
        product.purchasePrice = input.purchasePrice;
        product.salesPrice = input.salesPrice;
        product.currency = input.currency;
        product.active = input.active;
        product.description = input.descricao;

        await productsRepository.save(product);
    }
}

export { ProductsService }