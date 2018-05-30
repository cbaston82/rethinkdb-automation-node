const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_coaching_units.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "ASSIGNED_DATE": random.date(),
    "COACHED_BY": random.personType(2),
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "END_DATE": random.date(),
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
  "table": "TBL_REC_COACH_ASSIGN"
}