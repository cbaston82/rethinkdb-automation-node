const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_ENTERED": random.date(),
    "DATE_UPD": random.date(),
    "END_DATE": random.date(),
    "RECOVEREE_ADDRESS": faker.address.streetAddress(),
    "RECOVEREE_CITY": faker.address.city(),
    "RECOVEREE_COUNTY": faker.address.country(),
    "RECOVEREE_EFF_DATE": random.date(),
    "RECOVEREE_HOUSING": faker.random.words(3),
    "RECOVEREE_ST": faker.address.state(),
    "RECOVEREE_ZIP": faker.address.zipCode(),
    "RECOVERY_ID": i,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_EFF_DATE', 'RECOVERY_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_ADDRESS"
}

async function migrateNow (r, connection, data, direction) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = (direction === 'up')
      ? await migrate.up(r, connection, data)
      : await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}

module.exports.up = async function (r, connection) {
  await migrateNow(r, connection, data, 'up')
}

module.exports.down = async function (r, connection) {
  await migrateNow(r, connection, data, 'down')
}
