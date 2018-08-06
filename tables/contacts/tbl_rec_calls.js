const random = require('../../helpers/random')
const faker = require('faker')
const clientinfo = require('../clientinfo')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "ATTEMPTS": random.number(50),
    "CALL_DATE": random.date(),
    "COMMENTS": faker.lorem.sentences(2),
    "CONTACT": faker.random.boolean(),
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "OTHER_SUPPORTS": faker.random.boolean(),
    "RECOVEREE_ID": i,
    "RELAPSE": random.number(),
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['CALL_DATE'],
  "compoundIndexes": [],
  "table": "TBL_REC_CALLS"
}
