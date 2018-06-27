const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data.
for (let i = 1; i <= tables.tbl_rec_trainings_events.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_recoverees.total) recId = 1

  // Might seem like overkill. Doing this so dates make sense.
  let DATE_ADD = new Date();
  DATE_ADD.setDate(DATE_ADD.getDate() - random.number(365))

  let TE_DATE = new Date(DATE_ADD)
  TE_DATE.setDate(TE_DATE.getDate() + 7)

  seeder.push({
    "DATE_ADD": random.isoDateFormatTimeCreate(DATE_ADD),
    "DATE_UPD": random.isoDateFormatTimeCreate(DATE_ADD),
    "RECOVEREE_ID": recId,
    "TERecID": i,
    "TE_DATE": random.isoDateFormatTimeCreate(TE_DATE),
    "TE_LOCATION": random.number(tables.tbl_rcc.types.length),
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName(),
    "training_event": ""
  })
  recId++
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
