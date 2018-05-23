const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_call_times.types.forEach((type, i) => {
  seeder.push({
    "CALL_TIMES": type,
    "ID": i + 1,
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_CALL_TIMES"
}
