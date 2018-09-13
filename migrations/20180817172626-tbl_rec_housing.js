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
    RECOVEREE_ID: 1 + i,
    PREVIOUS_RESIDENCE_LENGTH: faker.lorem.words(),
    SHELTER_SAFE_HAVEN_LENGTH: faker.lorem.words(),
    HOMELESS_FOR_ONE_YEAR: faker.random.boolean(),
    TRANSITIONAL_LIVING_ENVIRONMENT: faker.random.boolean()
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID', 'RECOVEREE_ID'],
  compoundIndexes: [],
  table: 'TBL_REC_HOUSING'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

