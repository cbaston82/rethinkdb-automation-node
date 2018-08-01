const random = require('../../helpers/random/index')
const faker = require('faker')
const clientinfo = require('./clientinfo')
const demographics = require('../demographics/demographics')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  // some dates to make dates flow correctly.
  let AS_OF = new Date();
  AS_OF.setDate(AS_OF.getDate() - random.number(365))

  let DATE_UPD = new Date(AS_OF)
  DATE_UPD.setDate(DATE_UPD.getDate() + 7)

  let END_DATE = new Date(DATE_UPD)
  END_DATE.setDate(END_DATE.getDate() + 7)

  seeder.push({
    "AS_OF": random.isoDateFormatTimeCreate(AS_OF),
    "COLLEGE": Math.floor(Math.random()),
    "DATE_ADD": random.isoDateFormatTimeCreate(AS_OF),
    "DATE_UPD": random.isoDateFormatTimeCreate(DATE_UPD),
    "END_DATE": random.isoDateFormatTimeCreate(END_DATE),
    "RECOVEREE_EDUCATION": random.number(demographics.tbl_education.types.length),
    "RECOVEREE_EFF_DATE": random.date(),
    "RECOVEREE_ID": i,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['AS_OF', 'RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_EDUCATION"
}
