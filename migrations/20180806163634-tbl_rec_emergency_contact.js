const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')
const demographics = require('../data/demographics.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "EMER_ADDRESS": faker.address.streetAddress(),
    "EMER_CITY": faker.address.city(),
    "EMER_CONTACT": faker.name.firstName() + ' ' + faker.name.lastName(),
    "EMER_DATE": random.date(),
    "EMER_PHONE": random.phoneNumber(),
    "EMER_REL_CD": random.number(demographics.tbl_relationship_cd.types.length),
    "EMER_ST": faker.address.state(),
    "EMER_ZIP": faker.address.zipCode(),
    "END_DATE": random.date(),
    "RECOVEREE_EFF_DATE": random.date(),
    "RECOVEREE_ID": i,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_EMERGENCY_CONTACT"
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
