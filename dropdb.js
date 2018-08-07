const r = require('rethinkdb')

// Simply drop the entire database.
r.connect({
  host: 'localhost',
  port: 28015,
  authKey: '',
  db: 'ayy'

}, function (err, conn) {
  if (err) throw err
  r.dbDrop('ayy').run(conn, (err, result) => {
    if (err) throw err
    console.log(result)
    conn.close((err) => {
      if (err) throw err
    })
  })
})
