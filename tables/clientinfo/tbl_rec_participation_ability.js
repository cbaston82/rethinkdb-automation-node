const random = require('../../helpers/random')
const faker = require('faker')
const clientinfo = require('../clientinfo')

// Seed data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "RECOVEREE_ID": i,
    "ID": i,
    "RELIGIOUS_SPIRITUAL_BELIEFS": faker.random.boolean(),
    "CULTURAL_NEEDS_CONCERNS": faker.random.boolean(),
    "SEXUAL_PREFERENCES_ORIENTATION": faker.random.boolean(),
    "LANGUAGE": faker.random.boolean(),
    "OTHER": faker.lorem.words(),
    "DATE_CREATED": random.date()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_PARTICIPATION_ABILITY'
}
