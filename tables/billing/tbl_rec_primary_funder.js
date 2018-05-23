const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.tbl_rec_primary_funder.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    // Todo: Figure out what data would be required here.
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['AS_OF', 'END_DATE', 'RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_PRIMARY_FUNDER"
}
