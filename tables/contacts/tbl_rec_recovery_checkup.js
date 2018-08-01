const random = require('../../helpers/random/index')
const faker = require('faker')
const clientinfo = require('../clientinfo/clientinfo')
const demographics = require('../demographics/demographics')
const contacts = require('./contacts')

// Seed data.
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

module.exports = {
  "seeder": seeder,
  "indexes": [],
  "compoundIndexes": [],
  "table": "TBL_REC_RECOVERY_CHECKUP"
}
