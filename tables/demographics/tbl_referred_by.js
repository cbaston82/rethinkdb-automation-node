const demographics = require('./demographics')

// Seed data.
const seeder = []

// create seed data.
demographics.tbl_referred_by.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "REFERRED_BY": type
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_REFERRED_BY"
}
