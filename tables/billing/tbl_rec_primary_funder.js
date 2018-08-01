const random = require('../../helpers/random')
const faker = require('faker')

const clientinfo = require('../clientinfo/clientinfo')
const demographics = require('../demographics/demographics')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  let DATE_ADD = new Date();
  DATE_ADD.setDate(DATE_ADD.getDate() - random.number(365))

  let DATE_UPD = new Date(DATE_ADD)
  DATE_UPD.setDate(DATE_UPD.getDate() + 7)

  let END_DATE = new Date(DATE_UPD)
  END_DATE.setDate(END_DATE.getDate() + 7)

  seeder.push({
    "AS_OF": random.isoDateFormatTimeCreate(DATE_ADD),
    "DATE_ADD": random.isoDateFormatTimeCreate(DATE_UPD),
    "DATE_UPD": random.isoDateFormatTimeCreate(DATE_UPD),
    "END_DATE": random.isoDateFormatTimeCreate(END_DATE),
    "RECOVEREE_FUNDER": random.number(demographics.tbl_referred_by.types.length),
    "RECOVEREE_ID": i,
    "USERNAME_ADD":  faker.internet.userName(),
    "USERNAME_UPD":  faker.internet.userName()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['AS_OF', 'END_DATE', 'RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_PRIMARY_FUNDER"
}
