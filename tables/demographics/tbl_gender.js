const demographics = require('./demographics')

// Seed data.
const seeder = []

// create seed data.
demographics.tbl_gender.types.forEach((type, i) => {
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
