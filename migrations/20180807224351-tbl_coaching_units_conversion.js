const upDown = require('../helpers/updown')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').coachingConfig

// Get any data needed for use in seeder.
const programs = require('../data/programs.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
// Looping through tlb_rcc to create unit conversion for each program.
programs.tbl_rcc.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "MINUTES_PER_UNIT": random.number(59),
    "PROGRAM": i + 1,
  })
})

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_COACHING_UNITS_CONVERSION"
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
