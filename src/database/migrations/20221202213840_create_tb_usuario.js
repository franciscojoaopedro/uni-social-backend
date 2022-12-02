
exports.up = function(knex) {
  return knex.schema.createTable('tb_usuario', function (table) {
    table.increments();
    table.string('nprocesso').notNullable();
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
