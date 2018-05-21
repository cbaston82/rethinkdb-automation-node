const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
for(let i = 1; i <= tables.tbl_events.total; i++){

  seeder.push({
    // Todo: Add data to seed.
  })
}

module.exports = {
  "seeder" :seeder,
  "indexes" : [],
  "compoundIndexes" : [],
  "table" : "TBL_EVENTS"
}
