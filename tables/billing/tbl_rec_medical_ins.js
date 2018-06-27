const faker = require('faker')
const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_medical_ins.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_recoverees.total) recId = 1

  // some dates to make dates flow correctly.
  let DATE_ADD = new Date();
  DATE_ADD.setDate(DATE_ADD.getDate() - random.number(365))

  let DATE_UPD = new Date(DATE_ADD)
  DATE_UPD.setDate(DATE_UPD.getDate() + 7)

  let END_DATE = new Date(DATE_UPD)
  END_DATE.setDate(END_DATE.getDate() + 7)

  seeder.push({
    "BHPROVIDER": null, // Question: What is this?. This is set to null on front end.
    "COUNTY": faker.address.county(),
    "DATE_ADD": random.isoDateFormatTimeCreate(DATE_ADD),
    "DATE_UPD": random.isoDateFormatTimeCreate(DATE_UPD),
    "EFF_DATE": random.isoDateFormatTimeCreate(DATE_UPD),
    "END_DATE": random.isoDateFormatTimeCreate(END_DATE),
    "HAVE": faker.random.boolean(),
    "RECOVEREE_ID": recId,
    "RECOVEREE_INS": random.number(tables.tbl_medical_ins.types.length),
    "SIGNUP": null, // Question: What is is this? This is set to null by default.
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName(),
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['DATE_ADD', 'EFF_DATE', 'RECOVEREE_ID', 'RECOVEREE_INS'],
  "compoundIndexes": [],
  "table": "TBL_REC_MEDICAL_INS"
}
