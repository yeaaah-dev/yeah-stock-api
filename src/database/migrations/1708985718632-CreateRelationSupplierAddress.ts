import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationSupplierAddress1708985718632 implements MigrationInterface {
    name = 'CreateRelationSupplierAddress1708985718632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "suppliers" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "suppliers" ADD CONSTRAINT "UQ_39ff171699133c953b3813bb62a" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "suppliers" ADD CONSTRAINT "FK_39ff171699133c953b3813bb62a" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "suppliers" DROP CONSTRAINT "FK_39ff171699133c953b3813bb62a"`);
        await queryRunner.query(`ALTER TABLE "suppliers" DROP CONSTRAINT "UQ_39ff171699133c953b3813bb62a"`);
        await queryRunner.query(`ALTER TABLE "suppliers" DROP COLUMN "addressId"`);
    }

}
