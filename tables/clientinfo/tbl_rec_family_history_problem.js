const random = require('../../helpers/random')
const clientinfo = require('./clientinfo')

// Seed data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "RECOVEREE_ID": i,
    "ID": i,
    "FAMILY": random.arrayOfNumbers(15)
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_FAMILY_HISTORY_PROBLEMS'
}
