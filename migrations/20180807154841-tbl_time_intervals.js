const upDown = require('../helpers/updown')

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
    ID: i,
    INTERVALS: i * 5,
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID'],
  compoundIndexes: [],
  table: 'TBL_TIME_INTERVALS'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
