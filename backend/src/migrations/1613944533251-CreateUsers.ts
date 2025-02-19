import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1613944533251 implements MigrationInterface {
  name = 'CreateUsers1613944533251';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_97672ac88f789774dd47f7c8be"`);
  }
}
