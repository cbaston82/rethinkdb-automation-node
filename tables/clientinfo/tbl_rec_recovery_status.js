const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
// Todo: Find out what data is required for this table
for(let i = 1; i <= tables.tbl_rec_recovery_status.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    // Create data to seed here.
  })
  recId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['RECOVER_ID'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_RECOVERY_STATUS"
}
