const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').medicalConfig

// Get any data needed for use in seeder.
const person = require('../data/person.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
person.tbl_clean_time_ranges.types.forEach((type, i) => {
  seeder.push({
    DESC: type.DESC,
    HIGH_NBR_OFDAYS: type.HIGH_NBR_OFDAYS,
    ID: i + 1,
    LOW_NBR_OFDAYS: type.LOW_NBR_OFDAYS
  })
})

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID'],
  compoundIndexes: [],
  table: 'TBL_CLEAN_TIME_RANGES'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
