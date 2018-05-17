const r = require('rethinkdb')
const config = require('./configuration/config')

// Simply drop the entire database.
r.connect(config, function(err, conn) {
  if (err) throw err
  r.dbDrop('ayy').run(conn, (err, result) => {
    if (err) throw err
    console.log(result)
    conn.close((err) => {
      if (err) throw err
    })
  })
})
