const tables = require('../../configuration/tables-config')

// Seed data
const seeder = []
let recId = 1

// create seed data - total is set in tables-config
// Todo: find out what data is required for this table
for(let i = 1; i <= tables.tbl_activities.total; i++){
  if(recId > tables.tbl_recoverees.total) recId = 1
  seeder.push({

  })
  recId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : [],
  "compoundIndexes" : [],
  "table" : 'TBL_REC_ACTIVITIES'
}
