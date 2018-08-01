const demographics = require('./demographics')

// Seed data.
const seeder = []

// create seed data.
demographics.tbl_family.types.forEach((type, i) => {
  seeder.push({
    "FAMILY": type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_FAMILY"
}
