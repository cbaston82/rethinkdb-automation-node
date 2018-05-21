const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.tbl_rec_activities.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    // Todo. get data to seed.
  })
  recId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : [],
  "compoundIndexes" : [],
  "table" : 'TBL_REC_ACTIVITIES'
}
