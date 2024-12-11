import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table: Knex.TableBuilder) => {
    table.integer('id').primary()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.string('email').notNullable()
    table.timestamps(true, true)
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}


