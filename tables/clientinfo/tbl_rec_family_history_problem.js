const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_family_history_problem.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_rec_family_history_problem.total) recId = 1

  seeder.push({
    "RECOVEREE_ID": recId,
    "ID": i,
    "FAMILY": random.arrayOfNumbers(15)
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_FAMILY_HISTORY_PROBLEMS'
}
