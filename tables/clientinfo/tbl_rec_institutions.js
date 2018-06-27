const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_institutions.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "RECID": recId,
    "JAIL": faker.random.boolean(),
    "PSYCHIATRIC_TREATMENT": faker.random.boolean(),
    "ALCOHOL_OR_DRUG_TREATMENT": faker.random.boolean(),
    "MEDICAL_TREATMENT": faker.random.boolean(),
    "OTHER": faker.lorem.words(),
    "CREATED": random.date()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_INSTITUTIONS'
}
