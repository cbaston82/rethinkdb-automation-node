const tables = require('../../configuration/tables-config')
const faker = require('faker')
const random = require('../../helpers/random')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_institutions.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_client_transport.total) recId = 1

  seeder.push({
    "ANTECEDENTS":  faker.lorem.sentence(),
    "BARRIERS":  faker.lorem.sentence(),
    "CONTACT":  faker.name.firstName() + ' ' + faker.name.lastName(),
    "DATE":  random.date(),
    "RECOVEREE_ID": recId,
    "STEPS":  faker.lorem.sentence(),
    "STRENGTHS":  faker.lorem.sentence(),
    "SUPPORTS":  faker.lorem.sentence(),
    "WARNING":  faker.lorem.sentence()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID', 'DATE'],
  "compoundIndexes": [],
  "table": 'TBL_REC_RELAPSE'
}
