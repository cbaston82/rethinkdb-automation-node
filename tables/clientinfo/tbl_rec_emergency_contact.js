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
    "DATE_ADD": random.isoRandomDateFormatTimeCreate(),
    "DATE_UPD": random.isoRandomDateFormatTimeCreate(),
    "EMER_ADDRESS":  faker.address.streetAddress(),
    "EMER_CITY":  faker.address.city(),
    "EMER_CONTACT":  faker.name.firstName() + ' ' + faker.name.lastName(),
    "EMER_DATE": random.isoRandomDateFormatTimeCreate(),
    "EMER_PHONE":  random.randomPhoneNubmer(),
    "EMER_REL_CD": Math.floor(Math.random() * 5) +1,
    "EMER_ST":  faker.address.state(),
    "EMER_ZIP": faker.address.zipCode(),
    "END_DATE": random.isoRandomDateFormatTimeCreate(),
    "RECOVEREE_EFF_DATE": random.isoRandomDateFormatTimeCreate(),
    "RECOVEREE_ID": recId,
    "USERNAME_ADD":  "jrbuser",
    "USERNAME_UPD":  "jrbuser"
  })
  recId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['RECOVEREE_ID'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_EMERGENCY_CONTACT"
}
