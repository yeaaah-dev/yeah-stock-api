import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableProductsAddColumnSupplier1709073568342 implements MigrationInterface {
    name = 'AlterTableProductsAddColumnSupplier1709073568342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "supplier" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "supplier"`);
    }

}
