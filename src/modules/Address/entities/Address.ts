import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Supplier } from "../../Suppliers/entities/Supplier";

@Entity("address")
class Address {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        length: 100,
    })
    street: string;

    @Column()
    neighborhood: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @Column()
    code: string;

    @CreateDateColumn({
        name: "createdat"
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updatedat"
    })
    updatedAt: Date;
}

export { Address }