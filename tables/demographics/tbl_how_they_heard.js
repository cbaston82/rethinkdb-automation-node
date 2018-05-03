const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_how_they_heard.types.forEach((type, i) => {
  seeder.push( {
    "DESCRIPTION":  type,
    "ID": i + 1,
    "SORT_SEQUENCE": i + 1
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_HOW_THEY_HEARD"
}
