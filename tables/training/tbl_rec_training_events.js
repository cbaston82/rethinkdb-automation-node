const random = require('../../helpers/random')
const faker = require('faker')
const clientinfo = require('../clientinfo/clientinfo')
const programs = require('../program/programs')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  // Might seem like overkill. Doing this so dates make sense.
  let DATE_ADD = new Date();
  DATE_ADD.setDate(DATE_ADD.getDate() - random.number(365))

  let TE_DATE = new Date(DATE_ADD)
  TE_DATE.setDate(TE_DATE.getDate() + 7)

  seeder.push({
    "DATE_ADD": random.isoDateFormatTimeCreate(DATE_ADD),
    "DATE_UPD": random.isoDateFormatTimeCreate(DATE_ADD),
    "RECOVEREE_ID": i,
    "TERecID": i,
    "TE_DATE": random.isoDateFormatTimeCreate(TE_DATE),
    "TE_LOCATION": random.number(programs.tbl_rcc.types.length),
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName(),
    "training_event": ""
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID', 'TE_DATE', 'TE_LOCATION', 'TERecID'],
  "compoundIndexes": [{
    "name": "TE_info",
    "indexes": ['TERecID', 'DATE_ADD']
  }],
  "table": "TBL_REC_TRAININGS_EVENTS"
}
