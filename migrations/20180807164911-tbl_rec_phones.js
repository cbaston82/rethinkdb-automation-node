const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').contactsConfig

// Get any data needed for use in seeder.
const clientinfo = require('../tables/clientinfo.json')
const contacts = require('../tables/contacts.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "CELLULAR_PROVIDER": random.number(contacts.tbl_cell_provider.types.length),
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "EMAIL_TEXT_MESSAGE": "",
    "LEAVE_A_MESSAGE": random.number(),
    "OK_TO_TEXT": random.number(),
    "PHONE_EXT": faker.random.number(),
    "PHONE_NUMBER": random.phoneNumber(),
    "PHONE_TYPE": random.number(contacts.tbl_phone_types.types.length),
    "RECOVEREE_ID": i,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
}

// Data to be seeded ot db.
const data = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_PHONES"
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
