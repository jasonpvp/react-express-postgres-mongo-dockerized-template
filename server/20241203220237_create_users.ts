import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTableIfNotExists('users', (table: Knex.TableBuilder) => {
    table.increments('id').primary()
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.string('email').notNullable()
    table.timestamps(true, true)
  }).then(() => {
    return knex('users').insert([{
      firstName: 'WEB_APP_NAME',
      lastName: 'WEB_APP_NAME',
      email: 'WEB_APP_NAME@WEB_APP_NAME.com'
    }])
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}


