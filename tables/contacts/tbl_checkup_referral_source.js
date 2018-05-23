const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')
const faker = require('faker')

// Seed data.
const seeder = []

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.tbl_checkup__referral_source.total; i++){
  seeder.push({
    "CONTACT_PERSON": faker.name.firstName() + ' ' + faker.name.lastName(),
    "EMAIL_ADDRESS": faker.internet.email(),
    "ID": i,
    "NOTES": faker.lorem.sentences(3),
    "PHONE": random.phoneNumber(),
    "PHONE_EXT": faker.random.number(),
    "REFERRAL_NAME": "Self" // Todo: get dynamically from table.
  })
}



module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_CHECKUP_REFERRAL_SOURCE"
}

