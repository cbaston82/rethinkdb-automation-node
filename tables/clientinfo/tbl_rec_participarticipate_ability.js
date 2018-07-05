const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_participate_ability.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_rec_participate_ability.total) recId = 1

  seeder.push({
    "RECOVEREE_ID": recId,
    "ID": i,
    "RELIGIOUS_SPIRITUAL_BELIEFS": faker.random.boolean(),
    "CULTURAL_NEEDS_CONCERNS": faker.random.boolean(),
    "SEXUAL_PREFERENCES_ORIENTATION": faker.random.boolean(),
    "LANGUAGE": faker.random.boolean(),
    "OTHER": faker.lorem.words(),
    "DATE_CREATED": random.date()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_PARTICIPATION_ABILITY'
}
