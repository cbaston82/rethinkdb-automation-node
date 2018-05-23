const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_ethnicity.types.forEach((type, i) => {
  seeder.push({
    "ETHNICITY":  type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_ETHNICITY"
}
