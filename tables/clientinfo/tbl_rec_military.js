const tables = require('../../configuration/tables-config')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_military.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_rec_military.total) recId = 1

  seeder.push({
    "RECOVEREE_ID": recId,
    "EVER_SERVED": faker.random.boolean(),
    "VETERAN": faker.random.boolean(),
    "VA_BENEFITS": faker.random.boolean(),
    "VA_SERVICES": faker.random.boolean()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_MILITARY'
}
