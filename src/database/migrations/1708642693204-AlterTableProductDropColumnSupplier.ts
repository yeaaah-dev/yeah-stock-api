import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableProductDropColumnSupplier1708642693204 implements MigrationInterface {
    name = 'AlterTableProductDropColumnSupplier1708642693204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "supplier"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "supplier" character varying NOT NULL`);
    }

}
