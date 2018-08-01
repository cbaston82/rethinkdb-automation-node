const demographics = require('./demographics')

// Seed data.
const seeder = []

// create seed data.
demographics.tbl_how_they_heard.types.forEach((type, i) => {
  seeder.push({
    "DESCRIPTION": type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_HOW_THEY_HEARD"
}
