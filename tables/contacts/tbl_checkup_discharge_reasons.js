const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_checkup_discharge_reasons.types.forEach((type, i) => {
  seeder.push({
    "ATTEMPTS": type.ATTEMPTS,
    "DISCHARGE_REASON": type.DISCHARGE_REASON,
    "ID": i + 1
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_CHECKUP_DISCHARGE_REASONS"
}
