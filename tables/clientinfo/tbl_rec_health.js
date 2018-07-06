const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_health.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_rec_military.total) recId = 1

  seeder.push({
    "RECOVEREE_ID": recId,
    "ID": i,
    "TIMES_HOSPITALIZED": random.number(5),
    "LAST_HOSPITALIZATION": random.date(),
    "MEDICAL_PROBLEMS": faker.random.boolean(),
    "MEDICAL_PROBLEMS_EXPLANATION": faker.lorem.words(),
    "PRESCRIBED_MEDICATION": faker.random.boolean(),
    "PRESCRIBED_MEDICATION_LIST": faker.lorem.words(),
    "PENSION": faker.random.boolean(),
    "NUTRITIONAL_LIFESTYLE": faker.random.word(),
    "PHYSICAL_LIFESTYLE": faker.random.word()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_HEALTH'
}
