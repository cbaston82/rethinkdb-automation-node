const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')
const faker = require('faker')

// Seed data.
const seeder = []

tables.tbl_checkup_referral_source.types.forEach((type, i) => {
  seeder.push({
    "CONTACT_PERSON": faker.name.firstName() + ' ' + faker.name.lastName(),
    "EMAIL_ADDRESS": faker.internet.email(),
    "ID": i,
    "NOTES": faker.lorem.sentences(3),
    "PHONE": random.phoneNumber(),
    "PHONE_EXT": faker.random.number(),
    "REFERRAL_NAME": type
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_CHECKUP_REFERRAL_SOURCE"
}