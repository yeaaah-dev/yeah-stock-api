import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Supplier } from "../../Suppliers/entities/Supplier";
import { User } from "../../Users/entities/User";

@Entity("products")
class Product {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @Column({
        type: "varchar",
        length: "2",
        name: "mesureunity"
    })
    mesureUnity: string;

    @Column({
        type: "decimal",
        precision: 5,
        scale: 2,
        name: "purchaseprice"
    })
    purchasePrice: number;

    @Column({
        type: "decimal",
        precision: 5,
        scale: 2,
        name: "salesprice"
    })
    salesPrice: number;

    @Column({
        type: "varchar",
        length: "3"
    })
    currency: string;

    @Column()
    active: boolean;

    @ManyToMany(() => Supplier, (supplier) => supplier.products)
    @JoinTable({
        name: "products_suppliers"
    })
    suppliers: Supplier[];

    @Column({
        type: "text",
    })
    description: string;

    @ManyToOne(() => User, (user) => user.products)
    user: User;

    @CreateDateColumn({
        name: "createdat"
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updatedat"
    })
    updatedAt: Date;

}

export { Product }

