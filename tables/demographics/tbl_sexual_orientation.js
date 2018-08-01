const demographics = require('./demographics')

// Seed data.
const seeder = []

// create seed data.
demographics.tbl_sexual_orientation.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "ORIENTATION": type
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_SEXUAL_ORIENTATION"
}
