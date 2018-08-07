const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').coachingConfig

// Get any data needed for use in seeder.
const coaching = require('../tables/coaching.json')

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
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = await migrate.up(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}

module.exports.down = async function (r, connection) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}
