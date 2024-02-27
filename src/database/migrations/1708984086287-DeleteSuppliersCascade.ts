import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteSuppliersCascade1708984086287 implements MigrationInterface {
    name = 'DeleteSuppliersCascade1708984086287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products_suppliers" DROP CONSTRAINT "FK_fd38cd0d47685c502ade307b253"`);
        await queryRunner.query(`ALTER TABLE "products_suppliers" ADD CONSTRAINT "FK_fd38cd0d47685c502ade307b253" FOREIGN KEY ("suppliersId") REFERENCES "suppliers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products_suppliers" DROP CONSTRAINT "FK_fd38cd0d47685c502ade307b253"`);
        await queryRunner.query(`ALTER TABLE "products_suppliers" ADD CONSTRAINT "FK_fd38cd0d47685c502ade307b253" FOREIGN KEY ("suppliersId") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
