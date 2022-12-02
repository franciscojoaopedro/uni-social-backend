exports.up = function (knex) {
    return knex.schema.createTable('tb_usuario', function (table) {
        table.increments();
        table.string('nprocesso');
        table.string('nome');
        table.string('email');
        table.string('password');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('tb_usuario');
};

