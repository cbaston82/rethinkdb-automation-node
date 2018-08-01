const faker = require('faker')
const coaching = require('./coaching')

// Seed data.
const seeder = []

// create seed data.
coaching.tbl_volunteer_activities.types.forEach((type, i) => {
  seeder.push({
    "ACTIVITY": type,
    "ID": i + 1,
    "BILLABLE": faker.random.boolean()
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_VOLUNTEER_ACTIVITIES"
}
