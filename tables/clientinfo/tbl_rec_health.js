const random = require('../../helpers/random')
const faker = require('faker')
const clientinfo = require('./clientinfo')

// Seed data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "RECOVEREE_ID": i,
    "ID": i,
    "TIMES_HOSPITALIZED": random.number(5),
    "LAST_HOSPITALIZATION": random.date(),
    "MEDICAL_PROBLEMS": faker.random.boolean(),
    "MEDICAL_PROBLEMS_EXPLANATION": faker.lorem.words(),
    "PRESCRIBED_MEDICATION": faker.random.boolean(),
    "PRESCRIBED_MEDICATION_LIST": faker.lorem.words(),
    "PENSION": faker.random.boolean(),
    "PENSION_EXPLANATION": faker.lorem.words(),
    "NUTRITIONAL_LIFESTYLE": faker.random.word(),
    "PHYSICAL_LIFESTYLE": faker.random.word()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_HEALTH'
}
