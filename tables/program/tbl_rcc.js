const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_rcc.types.forEach((type, i) => {
  seeder.push({
      "ID": i +1,
      "IncludeInReport": 0, // Todo: tie this to a report.
      "RCC":  type,
      "SORT_SEQUENCE": 0 // Todo: remove if not needed.
    })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_RCC"
}
