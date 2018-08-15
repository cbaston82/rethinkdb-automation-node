const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').contactsConfig

// Get any data needed for use in seeder.
const contacts = require('../data/contacts.json')

// Initial state of seeder data.
const seeder = []

contacts.tbl_checkup_referral_source.types.forEach((type, i) => {
  seeder.push({
    CONTACT_PERSON: faker.name.firstName() + ' ' + faker.name.lastName(),
    EMAIL_ADDRESS: faker.internet.email(),
    ID: i + 1,
    NOTES: faker.lorem.sentences(3),
    PHONE: random.phoneNumber(),
    PHONE_EXT: faker.random.number(),
    REFERRAL_NAME: type
  })
})

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID'],
  compoundIndexes: [],
  table: 'TBL_CHECKUP_REFERRAL_SOURCE'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
