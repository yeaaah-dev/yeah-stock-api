import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { supplierInputDto } from "../Dtos/supplierInputDto";
import { Product } from "../../Products/entities/Product";

@Entity("suppliers")
class Supplier {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => Product, (product) => product.suppliers)
    products: Product[];
    
    @CreateDateColumn({
        name: "createdat"
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updatedat"
    })
    updatedAt: Date;

}

export { Supplier }