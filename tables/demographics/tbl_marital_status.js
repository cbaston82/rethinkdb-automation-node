const demographics = require('./demographics')

// Seed data.
const seeder = []

// create seed data.
demographics.tbl_marital_status.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "STATUS": type
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_MARITAL_STATUS"
}
