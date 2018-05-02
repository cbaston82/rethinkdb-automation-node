const faker = require('faker')
const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.tbl_rec_address.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_ENTERED": random.date(),
    "DATE_UPD": random.date(),
    "END_DATE": random.date(),
    "RECOVEREE_ADDRESS": faker.address.streetAddress(),
    "RECOVEREE_CITY": faker.address.city(),
    "RECOVEREE_COUNTY": faker.address.country(),
    "RECOVEREE_EFF_DATE": random.date(),
    "RECOVEREE_HOUSING":  faker.lorem.words(3),
    "RECOVEREE_ST": faker.address.state(),
    "RECOVEREE_ZIP": faker.address.zipCode(),
    "RECOVERY_ID": recId,
    "USERNAME_ADD":  "jrbuser",
    "USERNAME_UPD":  "jrbuser"
  })
  recId++
}

module.exports = {
  "seeder" : seeder,
  "indexes" : ['RECOVEREE_EFF_DATE', 'RECOVERY_ID'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_ADDRESS"
}
