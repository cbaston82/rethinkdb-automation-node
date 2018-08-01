const random = require('../../helpers/random')
const faker = require('faker')
const clientinfo = require('../clientinfo/clientinfo')

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

  // Added this to make sure a recoveree is not assigned to them self as a coach.
  let COACHED_BY =  random.personType(2)
  while (COACHED_BY === i) {
    COACHED_BY = random.personType(2)
  }

  seeder.push({
    "ASSIGNED_DATE": random.isoDateFormatTimeCreate(DATE_ADD),
    "COACHED_BY": COACHED_BY,
    "DATE_ADD": random.isoDateFormatTimeCreate(DATE_ADD),
    "DATE_UPD": random.isoDateFormatTimeCreate(DATE_UPD),
    "END_DATE": random.isoDateFormatTimeCreate(END_DATE),
    "RECOVEREE_ID": i,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_COACH_ASSIGN"
}
