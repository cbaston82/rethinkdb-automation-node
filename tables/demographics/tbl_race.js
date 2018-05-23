const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_race.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "RACE": type
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_RACE"
}
