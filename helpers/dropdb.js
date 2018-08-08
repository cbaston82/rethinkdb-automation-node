const r = require('rethinkdb')
const config = require('../configuration/config.js')
const resolver = require('./resolver')

let connection = null

// Simply drop the entire database.
const conn = r.connect({
  host: config.servers.host,
  port: config.servers.port,
  db: config.db
})

conn
  .then((conn) => {
    connection = conn
  })
  .catch((reject) => {
    console.log(reject)
  })

function doWork (conn) {
  const query = r.dbDrop(config.db)
    .run(conn)
  resolver.resolveIt(query)
  conn.close()
}

doWork(connection)
