const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_transportation_type.types.forEach((type, i) => {
  seeder.push({
    "DESC":  type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_TRANSPORTATION_TYPE"
}
