const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_gender.types.forEach((type, i) => {
  seeder.push({
    "GENDER": type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_GENDER"
}
