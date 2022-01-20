'use strict';

exports.up = function (knex) {
  return knex.schema.createTable('forms', table => {
    table.increments();
    table.string('email').notNullable();
    table.json('session').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('forms');
};
