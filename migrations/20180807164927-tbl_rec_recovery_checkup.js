const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').contactsConfig

// Get any data needed for use in seeder.
const contacts = require('../data/contacts.json')
const clientinfo = require('../data/clientinfo.json')
const demographics = require('../data/demographics.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "DISCHARGE_DATE": "",
    "DISCHARGE_REASON": random.number(contacts.tbl_checkup_discharge_reasons.types.length),
    "EFFECTIVE_DATE": random.date(),
    "RECOVEREE_ID": i,
    "REFERRAL_SOURCE": random.number(demographics.tbl_referral_source.types.length),
    "Recoverycheckupid": i, // Todo: maps to tbl_rec_recovery_checkup_services //TODO: Matt come back to this
    "TIME_TO_CALL": random.number(contacts.tbl_call_times.types.length),
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName(),
    "fk_serviceid": random.number(contacts.tbl_checkup_services.types.length)
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": [],
  "compoundIndexes": [],
  "table": "TBL_REC_RECOVERY_CHECKUP"
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
