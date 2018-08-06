const faker = require('faker')
const clientinfo = require('../clientinfo')

// Seed data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "RECOVEREE_ID": i,
    "EVER_SERVED": faker.random.boolean(),
    "VETERAN": faker.random.boolean(),
    "VA_BENEFITS": faker.random.boolean(),
    "VA_SERVICES": faker.random.boolean()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_MILITARY'
}
