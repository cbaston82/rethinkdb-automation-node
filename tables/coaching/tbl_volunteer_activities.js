const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_volunteer_activities.types.forEach((type, i) => {
  seeder.push({
    "ACTIVITY":  type,
    "ID": i + 1,
    "BILLABLE": 0, // Todo: remove if not needed
    "SORT_SEQUENCE":i + 1
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_VOLUNTEER_ACTIVITIES"
}
