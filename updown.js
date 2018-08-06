module.exports.up = async function (r, connection) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = await migrate.up(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}

module.exports.down = async function (r, connection) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}
