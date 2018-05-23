const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_volunteer_activities.types.forEach((type, i) => {
  seeder.push({
    "ACTIVITY": type,
    "ID": i + 1,
    "BILLABLE": 0 // Todo: remove if not needed... IT IS needed as true || false
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_VOLUNTEER_ACTIVITIES"
}
