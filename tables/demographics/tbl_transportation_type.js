const demographics = require('./demographics')

// Seed data.
const seeder = []

// create seed data.
demographics.tbl_transportation_type.types.forEach((type, i) => {
  seeder.push({
    "DESC": type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_TRANSPORTATION_TYPE"
}
