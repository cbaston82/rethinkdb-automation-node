const faker = require('faker')
const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.tbl_rec_medical_ins.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "BHPROVIDER": null, // Question: what is this
    "COUNTY": faker.address.county(),
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "EFF_DATE": random.date(),
    "END_DATE":  "",
    "HAVE": faker.random.boolean(),
    "RECOVEREE_ID": recId,
    "RECOVEREE_INS":random.number(tables.tbl_medical_ins.types.length),
    "SIGNUP": 0, // Question: what is this?
    "USERNAME_ADD":  faker.internet.userName(),
    "USERNAME_UPD":  faker.internet.userName(),
  })
  recId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['DATE_ADD', 'EFF_DATE', 'RECOVEREE_ID', 'RECOVEREE_INS'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_MEDICAL_INS"
}
