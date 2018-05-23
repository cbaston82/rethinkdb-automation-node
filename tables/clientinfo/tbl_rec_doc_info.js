const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.tbl_rec_doc_info.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_ADDED": random.date(),
    "DATE_UPD": random.date(),
    "DRUG_COURT": random.number(),
    "EFF_DATE": random.date(),
    "END_DATE": random.date(),
    "EVER_ARRESTED": random.number(),
    "EVER_INCARCERATED": random.number(),
    "EVER_ON_PAROLE": random.number(),
    "EVER_ON_PROBATION": random.number(),
    "ON_PAROLE_NOW": random.number(),
    "ON_PROBATION_NOW": random.number(),
    "RECOVERY_ID": recId,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['EFF_DATE', 'RECOVERY_ID'],
  "compoundIndexes": [],
  "table" : 'TBL_REC_DOC_INFO'
}
