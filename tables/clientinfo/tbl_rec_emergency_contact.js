const faker = require('faker')
const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.tbl_rec_emergency_contact.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "EMER_ADDRESS": faker.address.streetAddress(),
    "EMER_CITY": faker.address.city(),
    "EMER_CONTACT": faker.name.firstName() + ' ' + faker.name.lastName(),
    "EMER_DATE": random.date(),
    "EMER_PHONE": random.phoneNumber(),
    "EMER_REL_CD":random.number(tables.tbl_relationship_cd.types.length),
    "EMER_ST": faker.address.state(),
    "EMER_ZIP": faker.address.zipCode(),
    "END_DATE": random.date(),
    "RECOVEREE_EFF_DATE": random.date(),
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
  "table": "TBL_REC_EMERGENCY_CONTACT"
}
