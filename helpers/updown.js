const migrate = require('./migrate-table')
const resolver = require('./resolver')

module.exports = async function migrateNow (r, connection, data, config, direction) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = (direction === 'up')
      ? await migrate.up(r, connection, data)
      : await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}
