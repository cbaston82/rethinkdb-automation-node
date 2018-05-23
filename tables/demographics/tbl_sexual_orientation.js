const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_sexual_orientation.types.forEach((type, i) => {
  seeder.push(    {
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
