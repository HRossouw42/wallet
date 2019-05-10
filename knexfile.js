module.exports = {
  client: 'mysql',
  connection: {
    user: 'root',
    password: 'password',
    database: 'testdb',
    host: 'localhost'
  },
  migrations: {
    directory: __dirname + '/database/migrations'
  },
  seeds: {
    directory: __dirname + '/database/seeds'
  }  
}

