const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').contactsConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    ATTEMPTS: random.number(50),
    CALL_DATE: random.date(),
    COMMENTS: faker.lorem.sentences(2),
    CONTACT: faker.random.boolean(),
    DATE_ADD: random.date(),
    DATE_UPD: random.date(),
    OTHER_SUPPORTS: faker.random.boolean(),
    RECOVEREE_ID: i,
    RELAPSE: random.number(),
    USERNAME_ADD: faker.internet.userName(),
    USERNAME_UPD: faker.internet.userName()
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['CALL_DATE'],
  compoundIndexes: [],
  table: 'TBL_REC_CALLS'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
