import { suppliersRepository } from './../../Suppliers/repositories/suppliersRepository';
import { In, Like } from "typeorm";
import { Product } from "../entities/Product";
import { productsRepository } from "../repositories/productsRepository"
import { usersRepository } from '../../Users/repositories/usersRepository';
import { AppError } from '../../../shared/errors/AppError';

class ProductsService {
       
    async create(userId: string, input: any): Promise<void> {
        
        if (input.name.length <= 0 ) return;

        const user = await usersRepository.findById(userId);

        if (!user) throw new AppError("User not found", 404);
        
        const productAlredyExists = await productsRepository.findOne({
            where: {
                name: input.name
            }
        });
        
        if (productAlredyExists) return;

        // const suppliers = await suppliersRepository.find({
        //     where: {
        //         id: In(input.suppliersIds)
        //     }
        // });

        // input.suppliers = suppliers;
        input.user = user;

        const product = productsRepository.create(input);
        await productsRepository.save(product);
    }

    async get(userId: string, id: string): Promise<Product>{
        const product = await productsRepository.findOne({
            where: {
                id,
                user: {
                    id: userId
                }
            },
            relations: {
                suppliers: true
            }
        });

        if (!product) throw new Error("Product not found!");

        return product;
    }

    async getList(userId: string, name: string = ""): Promise<Product[]>{
        const products = await productsRepository.findByName(userId, name);

        // const products = await productsRepository.find({
        //     where: {
        //         name: Like(`%${name}%`),
        //         user: {
        //             id: userId
        //         }
        //     },
        //     relations: {
        //         suppliers: true
        //     }
        // });

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

    async delete(id: string): Promise<void>  {
        const product = await productsRepository.findOne({
            where: {
                id
            }
        });

        if (!product) return;
        
        await productsRepository.remove(product);
    }
}

export { ProductsService }