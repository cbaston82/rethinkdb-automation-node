const upDown = require('../helpers/updown')
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
    DATE_ADD: random.date(),
    DATE_UPD: random.date(),
    DISCHARGE_DATE: random.date(),
    DISCHARGE_REASON: random.number(contacts.tbl_checkup_discharge_reasons.types.length),
    EFFECTIVE_DATE: random.date(),
    RECOVEREE_ID: i,
    REFERRAL_SOURCE: random.number(demographics.tbl_referral_source.types.length),
    Recoverycheckupid: i, // Todo: maps to tbl_rec_recovery_checkup_services //TODO: Matt come back to this
    TIME_TO_CALL: random.number(contacts.tbl_call_times.types.length),
    USERNAME_ADD: faker.internet.userName(),
    USERNAME_UPD: faker.internet.userName(),
    fk_serviceid: random.number(contacts.tbl_checkup_services.types.length)
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: [],
  compoundIndexes: [],
  table: 'TBL_REC_RECOVERY_CHECKUP'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
