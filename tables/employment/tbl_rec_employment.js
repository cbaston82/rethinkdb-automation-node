const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_employment.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "AS_OF": random.date(),
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "END_DATE": random.date(),
    "RECOVEREE_EFF_DATE": random.date(),
    "RECOVEREE_EMPLOYMENT": random.number(tables.tbl_employment.types.length),
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
  "table": "TBL_REC_EMPLOYMENT"
}