module.exports = {
  client: 'mysql',
  connection: {
    user: 'root',
    password: 'password',
    database: 'testdb',
    host: 'mysql-server'
  },
  migrations: {
    directory: __dirname + '/database/migrations'
  },
  seeds: {
    directory: __dirname + '/database/seeds'
  }  
}

