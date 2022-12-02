module.exports = {
    development: {
        client: 'sqlite3',

        connection: {
            filename: './src/database/db.sqlite3',
        },

        migrations: {
            directory: './src/database/migrations',
        },
        seeds: {
            directory: './src/database/seeds',
        },
        useNullAsDefault: true,
    },
};
