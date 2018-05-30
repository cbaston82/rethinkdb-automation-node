const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_language.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "LANGUAGE": type
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_LANGUAGE"
}