const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').programConfig

// Get any data needed for use in seeder.
// const programs = require('../data/programs.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= 6; i++) {

  // just creating time intervals by 5.
  seeder.push({
    'ID': i,
    'INTERVALS': i * 5,
  })
}

// Data to be seeded to db.
const data = {
  'seeder': seeder,
  'indexes': ['ID'],
  'compoundIndexes': [],
  'table': 'TBL_TIME_INTERVALS'
}

async function migrateNow (r, connection, data, direction) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = (direction === 'up')
      ? await migrate.up(r, connection, data)
      : await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}

module.exports.up = async function (r, connection) {
  await migrateNow(r, connection, data, 'up')
}

module.exports.down = async function (r, connection) {
  await migrateNow(r, connection, data, 'down')
}
