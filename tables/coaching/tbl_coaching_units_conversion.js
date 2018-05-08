const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_coaching_units_conversion.types.forEach((type, i) => {
  seeder.push( {
    "ID": i + 1,
    "IncludeInReport": 0, // Todo: remove if not needed.
    "MINUTES_PER_UNIT": type.MINUTES_PER_UNIT,
    "PROGRAM": type.PROGRAM, // Question: What programs is this tied to?
    "SORT_SEQUENCE": 0 // Todo: remove if not needed.
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_COACHING_UNITS_CONVERSION"
}

