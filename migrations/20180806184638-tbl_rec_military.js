const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')
const demographics = require('../data/demographics.json')

// Seed data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    RECOVEREE_ID: i,
    EVER_SERVED: faker.random.boolean(),
    VETERAN: faker.random.boolean(),
    VA_BENEFITS: faker.random.boolean(),
    VA_SERVICES: faker.random.boolean(),
    MILITARY_STATUS: faker.lorem.word(),
    MILITARY_BRANCH: random.number(demographics.tbl_military_branches.types.length),
    MILITARY_DISCHARGE_STATUS: random.number(demographics.tbl_military_discharge_types.types.length)
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['RECOVEREE_ID'],
  compoundIndexes: [],
  table: 'TBL_REC_MILITARY'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

