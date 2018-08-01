const faker = require('faker')
const random = require('../../helpers/random')
const clientinfo = require('./clientinfo')

// Seed data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "ANTECEDENTS":  faker.lorem.sentence(),
    "BARRIERS":  faker.lorem.sentence(),
    "CONTACT":  faker.name.firstName() + ' ' + faker.name.lastName(),
    "DATE":  random.date(),
    "RECOVEREE_ID": i,
    "STEPS":  faker.lorem.sentence(),
    "STRENGTHS":  faker.lorem.sentence(),
    "SUPPORTS":  faker.lorem.sentence(),
    "WARNING":  faker.lorem.sentence()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID', 'DATE'],
  "compoundIndexes": [],
  "table": 'TBL_REC_RELAPSE'
}
