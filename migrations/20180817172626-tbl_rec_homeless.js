const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').billingConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 0; i < clientinfo.tbl_recoverees.total; i++) {
  seeder.push({
    ID: i + 1,
    RESIDENT_STATUS: faker.lorem.words(),
    PREVIOUS_RESIDENCE_LENGTH: faker.lorem.words(),
    SHELTER_SAFE_HAVEN_LENGTH: faker.lorem.words(),
    HOMELESS_FOR_ONE_YEAR: faker.random.boolean(),
    TRANSITIONAL_LIVING_ENVIRONMENT: random.date()
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID'],
  compoundIndexes: [],
  table: 'TBL_REC_HOMELESS'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

