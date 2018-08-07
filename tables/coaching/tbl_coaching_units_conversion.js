const random = require('../../helpers/random')
const programs = require('../programs')

// Seed data.
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

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_COACHING_UNITS_CONVERSION"
}
