import AppDataSource from "../../../database/data-source";
import { Product } from "../entities/Product";

export const productsRepository = AppDataSource.getRepository(Product).extend({
    async findByName(userid: string, name: string): Promise<Product[]> {
        return this.createQueryBuilder("product")
            .leftJoinAndSelect("product.suppliers", "supplier")
            .where("product.name ILIKE :name AND product.userId  = :userid", {name: `%${name}%`, userid})
            .getMany();
    }, 
});