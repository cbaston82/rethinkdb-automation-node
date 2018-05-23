const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_referred_by.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "REFERRED_BY": type
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_REFERRED_BY"
}
