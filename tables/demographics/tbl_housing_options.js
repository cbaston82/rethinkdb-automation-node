const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_housing_options.types.forEach((type, i) => {
  seeder.push({
    "DESCRIPTION": type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_HOUSING_OPTIONS"
}