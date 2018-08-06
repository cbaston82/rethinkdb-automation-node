const random = require('../../helpers/random')
const faker = require('faker')
const clientinfo = require('../clientinfo')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  // some dates to make dates flow correctly.
  let DATE_ADD = new Date();
  DATE_ADD.setDate(DATE_ADD.getDate() - random.number(365))

  let DATE_UPD = new Date(DATE_ADD)
  DATE_UPD.setDate(DATE_UPD.getDate() + 7)

  let END_DATE = new Date(DATE_UPD)
  END_DATE.setDate(END_DATE.getDate() + 7)

  let units = random.number(10)
  let units_remaining = random.number(units)

  seeder.push({
    "DATE_ADD": random.isoDateFormatTimeCreate(DATE_ADD),
    "DATE_UPD": random.isoDateFormatTimeCreate(DATE_UPD),
    "EFF_DATE": random.isoDateFormatTimeCreate(DATE_UPD),
    "END_DATE": random.isoDateFormatTimeCreate(END_DATE),
    "ID": i,
    "MISSED": random.number(),
    "RECOVEREE_ID": i,
    "UNITS_ALLOWED": units,
    "UNITS_REMAINING": units_remaining,
    "UNITS_USED": units - units_remaining,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['EFF_DATE', 'ID', 'RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_COACHING_UNITS"
}
