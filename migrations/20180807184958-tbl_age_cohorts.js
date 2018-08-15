const upDown = require('../helpers/updown')
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
    DESCRIPTION: type.DESCRIPTION,
    END_AGE: type.END_AGE,
    ID: i + 1,
    START_AGE: type.START_AGE,
    USERNAME: faker.internet.userName()
  })
})

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID', 'START_AGE', 'END_AGE'],
  compoundIndexes: [],
  table: 'TBL_AGE_COHORT'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
