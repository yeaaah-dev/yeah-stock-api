import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationSuppliersProducts1708642051437 implements MigrationInterface {
    name = 'CreateRelationSuppliersProducts1708642051437'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products_suppliers" ("productsId" uuid NOT NULL, "suppliersId" uuid NOT NULL, CONSTRAINT "PK_33ac625d5887aa3a35748714355" PRIMARY KEY ("productsId", "suppliersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0c810ff545e9357af2004f8335" ON "products_suppliers" ("productsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_fd38cd0d47685c502ade307b25" ON "products_suppliers" ("suppliersId") `);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "fornecedor"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "descricao"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "supplier" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_suppliers" ADD CONSTRAINT "FK_0c810ff545e9357af2004f8335b" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "products_suppliers" ADD CONSTRAINT "FK_fd38cd0d47685c502ade307b253" FOREIGN KEY ("suppliersId") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products_suppliers" DROP CONSTRAINT "FK_fd38cd0d47685c502ade307b253"`);
        await queryRunner.query(`ALTER TABLE "products_suppliers" DROP CONSTRAINT "FK_0c810ff545e9357af2004f8335b"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "supplier"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "descricao" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "fornecedor" character varying NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fd38cd0d47685c502ade307b25"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0c810ff545e9357af2004f8335"`);
        await queryRunner.query(`DROP TABLE "products_suppliers"`);
    }

}
