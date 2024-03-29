const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    ANTECEDENTS: faker.lorem.sentence(),
    BARRIERS: faker.lorem.sentence(),
    CONTACT: faker.name.firstName() + ' ' + faker.name.lastName(),
    DATE: random.date(),
    RECOVEREE_ID: i,
    STEPS: faker.lorem.sentence(),
    STRENGTHS: faker.lorem.sentence(),
    SUPPORTS: faker.lorem.sentence(),
    WARNING: faker.lorem.sentence()
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['RECOVEREE_ID', 'DATE'],
  compoundIndexes: [],
  table: 'TBL_REC_RELAPSE'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

