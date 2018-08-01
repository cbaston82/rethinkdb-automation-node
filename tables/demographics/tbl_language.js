const demographics = require('./demographics')

// Seed data.
const seeder = []

// create seed data.
demographics.tbl_language.types.forEach((type, i) => {
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
