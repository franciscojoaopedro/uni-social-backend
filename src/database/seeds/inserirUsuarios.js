/**

 * @param { import("knex").Knex } knex

 * @returns { Promise<void> }

 */

const { faker } = require('@faker-js/faker');

exports.seed = async function (knex) {
    // Deletes ALL existing entries

    await knex('tb_usuario').del();

    await knex('tb_usuario').insert([
        {
            nprocesso: '32019',
            nome: faker.name.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        },
        {
            nprocesso: '33012',
            nome: faker.name.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        },
        {
            nprocesso: '34018',
            nome: faker.name.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        },
        {
            nprocesso: '1240',
            nome: faker.name.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        },
    ]);
};
