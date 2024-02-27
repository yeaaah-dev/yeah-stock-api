import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserInputDto } from "../dtos/UserInputDto";
import { Product } from "../../Products/entities/Product";

@Entity("users")
class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column({
        type: "varchar",
        length: 80
    })
    name: string

    @Column({
        type: "varchar",
        unique: true
    })
    email: string

    @Column({
        type: "varchar",
    })
    password: string

    @OneToMany(() => Product, (product) => product.user)
    products: Product[]

    @CreateDateColumn({
        name: "createdat"
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updatedat"
    })
    updatedAt: Date;

    @DeleteDateColumn({ 
        name: 'deletedat'
    })
    deletedAt: Date;

    update(user: UserInputDto) {
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }
}

export { User }