const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_marital_status.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "SORT_SEQUENCE": 0, // Todo: remove if not needed.
    "STATUS":  type
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_MARITAL_STATUS"
}
