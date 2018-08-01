const faker = require('faker')
const random = require('../../helpers/random/index')
const clientinfo = require('./clientinfo')
const demographics = require('../demographics/demographics')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "EMER_ADDRESS": faker.address.streetAddress(),
    "EMER_CITY": faker.address.city(),
    "EMER_CONTACT": faker.name.firstName() + ' ' + faker.name.lastName(),
    "EMER_DATE": random.date(),
    "EMER_PHONE": random.phoneNumber(),
    "EMER_REL_CD": random.number(demographics.tbl_relationship_cd.types.length),
    "EMER_ST": faker.address.state(),
    "EMER_ZIP": faker.address.zipCode(),
    "END_DATE": random.date(),
    "RECOVEREE_EFF_DATE": random.date(),
    "RECOVEREE_ID": i,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_EMERGENCY_CONTACT"
}
