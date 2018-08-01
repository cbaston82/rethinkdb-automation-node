const demographics = require('./demographics')

// Seed data.
const seeder = []

// create seed data.
demographics.tbl_housing_options.types.forEach((type, i) => {
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
