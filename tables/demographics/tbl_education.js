const demographics = require('./demographics')

// Seed data.
const seeder = []

// create seed data.
demographics.tbl_education.types.forEach((type, i) => {
  seeder.push({
    "EDUCATION": type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_EDUCATION"
}
