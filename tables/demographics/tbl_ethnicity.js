const demographics = require('./demographics')

// Seed data.
const seeder = []

// create seed data.
demographics.tbl_ethnicity.types.forEach((type, i) => {
  seeder.push({
    "ETHNICITY": type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_ETHNICITY"
}
