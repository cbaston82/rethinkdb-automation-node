const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_calls.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "ATTEMPTS": random.number(50),
    "CALL_DATE": random.date(),
    "COMMENTS": faker.lorem.sentences(2),
    "CONTACT": faker.random.boolean(),
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "OTHER_SUPPORTS": faker.random.boolean(),
    "RECOVEREE_ID": recId,
    "RELAPSE": random.number(),
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['CALL_DATE'],
  "compoundIndexes": [],
  "table": "TBL_REC_CALLS"
}