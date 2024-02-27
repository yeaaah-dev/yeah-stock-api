import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { supplierInputDto } from "../Dtos/supplierInputDto";
import { Product } from "../../Products/entities/Product";
import { Address } from "../../Address/entities/Address";

@Entity("suppliers")
class Supplier {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @ManyToMany(() => Product, (product) => product.suppliers)
    products: Product[];
    
    @OneToOne(() => Address, (address) => address.supplier)
    @JoinColumn()
    address: Address;

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