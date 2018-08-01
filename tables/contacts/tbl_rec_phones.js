const random = require('../../helpers/random/index')
const faker = require('faker')
const clientinfo = require('../clientinfo/clientinfo')
const contacts = require('./contacts')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "CELLULAR_PROVIDER": random.number(contacts.tbl_cell_provider.types.length),
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "EMAIL_TEXT_MESSAGE": "",
    "LEAVE_A_MESSAGE": random.number(),
    "OK_TO_TEXT": random.number(),
    "PHONE_EXT": faker.random.number(),
    "PHONE_NUMBER": random.phoneNumber(),
    "PHONE_TYPE": random.number(contacts.tbl_phone_types.types.length),
    "RECOVEREE_ID": i,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_PHONES"
}
