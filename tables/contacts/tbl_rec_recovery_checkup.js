const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.tbl_rec_recovery_checkup.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "DISCHARGE_DATE": "",
    "DISCHARGE_REASON": random.number(tables.tbl_checkup_discharge_reasons.types.length),
    "EFFECTIVE_DATE": random.date(),
    "RECOVEREE_ID": recId,
    "REFERRAL_SOURCE": random.number(tables.tbl_referral_source.types.length),
    "Recoverycheckupid": recId, // Todo: maps to tbl_rec_recovery_checkup_services //TODO: Matt come back to this
    "TIME_TO_CALL": random.number(tables.tbl_call_times.types.length),
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName(),
    "fk_serviceid": random.number(tables.tbl_checkup_services.types.length)
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": [],
  "compoundIndexes": [],
  "table": "TBL_REC_RECOVERY_CHECKUP"
}
