const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_substance_history.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_rec_military.total) recId = 1

  seeder.push({
    "RECOVEREE_ID": recId,
    "ID": i,
    "FIRST_USE_AGE": faker.random.number(),
    "AGE_REGULARLY_USING": faker.random.number(),
    "INJECTED_DRUGS": faker.random.boolean(),
    "EXPERIENCED_BLACKOUTS": faker.random.boolean(),
    "EVER_OVERDOSED": faker.random.boolean(),
    "WITHDRAWLS_DTS_SEIZURES": faker.random.boolean(),
    "TOBACCO_NICOTINE": faker.random.boolean(),
    "TOBACCO_NICOTINE_INFORMATION": faker.random.boolean(),
    "SUBSTANCE_DISORDER_TREATMENT": faker.random.boolean(),
    "SUBSTANCE_DISORDER_TREATMENT_DETOX": random.number(5),
    "EVER_ABSTINENT": faker.random.boolean(),
    "EVER_ABSTINENT_LONGEST_TIME": faker.random.words(),
    "DRUGS_ACQUIRED": random.arrayOfNumbers(tables.tbl_drugs_acquired.types.length)
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_SUBSTANCE_HISTORY'
}
