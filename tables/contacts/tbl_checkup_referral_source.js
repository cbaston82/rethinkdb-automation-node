const random = require('../../helpers/random/index')
const faker = require('faker')
const contacts = require('./contacts')

// Seed data.
const seeder = []

contacts.tbl_checkup_referral_source.types.forEach((type, i) => {
  seeder.push({
    "CONTACT_PERSON": faker.name.firstName() + ' ' + faker.name.lastName(),
    "EMAIL_ADDRESS": faker.internet.email(),
    "ID": i + 1,
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
