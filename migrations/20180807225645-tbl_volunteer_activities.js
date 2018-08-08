const upDown = require('../helpers/updown')
const faker = require('faker')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').coachingConfig

// Get any data needed for use in seeder.
const coaching = require('../data/coaching.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
coaching.tbl_volunteer_activities.types.forEach((type, i) => {
  seeder.push({
    "ACTIVITY": type,
    "ID": i + 1,
    "BILLABLE": faker.random.boolean()
  })
})

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_VOLUNTEER_ACTIVITIES"
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
