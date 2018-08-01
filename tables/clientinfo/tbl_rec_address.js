const faker = require('faker')
const random = require('../../helpers/random/index')
const clientinfo = require('./clientinfo')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_ENTERED": random.date(),
    "DATE_UPD": random.date(),
    "END_DATE": random.date(),
    "RECOVEREE_ADDRESS": faker.address.streetAddress(),
    "RECOVEREE_CITY": faker.address.city(),
    "RECOVEREE_COUNTY": faker.address.country(),
    "RECOVEREE_EFF_DATE": random.date(),
    "RECOVEREE_HOUSING": faker.random.words(3),
    "RECOVEREE_ST": faker.address.state(),
    "RECOVEREE_ZIP": faker.address.zipCode(),
    "RECOVERY_ID": i,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_EFF_DATE', 'RECOVERY_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_ADDRESS"
}
