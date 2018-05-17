const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_training_event_locations.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "LOCATION":  type,
    "SORT_SEQUENCE": null // Remove if not needed.
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_TRAINING_EVENT_LOCATIONS"
}
