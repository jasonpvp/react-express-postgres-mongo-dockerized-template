import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('items', (table: Knex.TableBuilder) => {
    table.integer('id').primary()
    table.string('title').notNullable()
    table.string('description').nullable()
    table.timestamps(true, true)
    table.integer('created_by_user_id').references('id').inTable('users').index('userItems')
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('items');
}

