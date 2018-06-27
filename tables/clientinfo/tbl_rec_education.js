const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_education.total; i++) {


  // some dates to make dates flow correctly.
  let AS_OF = new Date();
  AS_OF.setDate(AS_OF.getDate() - random.number(365))

  let DATE_UPD = new Date(AS_OF)
  DATE_UPD.setDate(DATE_UPD.getDate() + 7)

  let END_DATE = new Date(DATE_UPD)
  END_DATE.setDate(END_DATE.getDate() + 7)

  // Many to one ids.
  if (recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "AS_OF": random.isoDateFormatTimeCreate(AS_OF),
    "COLLEGE": Math.floor(Math.random()),
    "DATE_ADD": random.isoDateFormatTimeCreate(AS_OF),
    "DATE_UPD": random.isoDateFormatTimeCreate(DATE_UPD),
    "END_DATE": random.isoDateFormatTimeCreate(END_DATE),
    "RECOVEREE_EDUCATION": random.number(tables.tbl_education.types.length),
    "RECOVEREE_EFF_DATE": random.date(),
    "RECOVEREE_ID": recId,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['AS_OF', 'RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_EDUCATION"
}
