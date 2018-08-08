const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').demographicsConfig

// Get any data needed for use in seeder.
const demographics = require('../data/demographics.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
demographics.tbl_age_cohort.types.forEach((type, i) => {
  seeder.push({
    "DESCRIPTION": type.DESCRIPTION,
    "END_AGE": type.END_AGE,
    "ID": i + 1,
    "START_AGE": type.START_AGE,
    "USERNAME": faker.internet.userName()
  })
})

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID', 'START_AGE', 'END_AGE'],
  "compoundIndexes": [],
  "table": "TBL_AGE_COHORT"
}

async function test (r, connection, data, direction) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = (direction === 'up')
      ? await migrate.up(r, connection, data)
      : await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}

module.exports.up = async function (r, connection) {
  await test(r, connection, data, 'up')
}

module.exports.down = async function (r, connection) {
  await test(r, connection, data, 'down')
}
