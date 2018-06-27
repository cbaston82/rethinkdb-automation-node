const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_primary_funder.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_recoverees.total) recId = 1

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
    "RECOVEREE_FUNDER": random.number(tables.tbl_referred_by.types.length),
    "RECOVEREE_ID": recId,
    "USERNAME_ADD":  faker.internet.userName(),
    "USERNAME_UPD":  faker.internet.userName()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['AS_OF', 'END_DATE', 'RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_PRIMARY_FUNDER"
}
