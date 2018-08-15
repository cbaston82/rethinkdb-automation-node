const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').trainingConfig

// Get any data needed for use in seeder.
const training = require('../data/training.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
training.tbl_training_event_locations.types.forEach((type, i) => {
  seeder.push({
    ID: i + 1,
    LOCATION: type
  })
})

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID'],
  compoundIndexes: [],
  table: 'TBL_TRAINING_EVENT_LOCATIONS'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
