const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_trainings_events_groups.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "TRAININGS_EVENTS_GROUP": type
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_TRAININGS_EVENTS_GROUPS"
}