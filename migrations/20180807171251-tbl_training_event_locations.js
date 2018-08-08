const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').trainingConfig

// Get any data needed for use in seeder.
const training = require('../data/training.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
training.tbl_training_event_locations.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "LOCATION": type
  })
})

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_TRAINING_EVENT_LOCATIONS"
}

async function test (r, connection, data, direction) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = (direction === 'up')
      ? await migrate.up(r, connection, data)
      : await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}

module.exports.up = async function (r, connection) {
  await test(r, connection, data, 'up')
}

module.exports.down = async function (r, connection) {
  await test(r, connection, data, 'down')
}
