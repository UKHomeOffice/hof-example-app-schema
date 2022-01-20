// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'hof_example_app_form',
      user: 'knex',
      password: 'knex'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
