const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_institutions.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_rec_military.total) recId = 1

  seeder.push({
    "RECOVEREE_ID": recId,
    "ID": i,
    "VETERAN_STATUS": random.number(3),
    "MILITARY_BRANCH": random.number(8),
    "DISCHARGE_STATUS": random.number(8),
    "DATA_CREATED": random.date()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_MILITARY'
}
