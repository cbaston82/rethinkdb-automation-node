const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').trainingConfig

// Get any data needed for use in seeder.
// const training = require('../data/training.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= 0; i++) { // Set to seed 0 for now

  seeder.push({
    // Todo: Add data to seed.
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": [],
  "compoundIndexes": [],
  "table": "TBL_EVENTS"
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
