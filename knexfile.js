module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/users.sqlite3'  // the folder will be created when we run the migrations
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations" //putting migrations into the data folder and not on the root
    },
    seeds: {
      directory: "./data/seeds" //putting seeds into the data folder and not on the root
    },
    pool: {
      afterCreate: (connection, done) => {
        connection.run('PRAGMA foreign_keys = ON', done); //enforce FK
     }
   }
  }
 //   staging: {
  //     client: "postgresql",
  //     connection: {
  //       database: "my_db",
  //       user: "username",
  //       password: "password"
  //     },
  //     pool: {
  //       min: 2,
  //       max: 10
  //     },
  //     migrations: {
  //       tableName: "knex_migrations"
  //     }
  //   },

  //   production: {
  //     client: "postgresql",
  //     connection: {
  //       database: "my_db",
  //       user: "username",
  //       password: "password"
  //     },
  //     pool: {
  //       min: 2,
  //       max: 10
  //     },
  //     migrations: {
  //       tableName: "knex_migrations"
  //     }
  //   }

};