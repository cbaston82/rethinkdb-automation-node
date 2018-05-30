const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_education.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "CELLULAR_PROVIDER": random.number(tables.tbl_cell_provider.types.length),
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "EMAIL_TEXT_MESSAGE": "",
    "LEAVE_A_MESSAGE": random.number(),
    "OK_TO_TEXT": random.number(),
    "PHONE_EXT": faker.random.number(),
    "PHONE_NUMBER": random.phoneNumber(),
    "PHONE_TYPE": random.number(tables.tbl_phone_types.types.length),
    "RECOVEREE_ID": recId,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_PHONES"
}