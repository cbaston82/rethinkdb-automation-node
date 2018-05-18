const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
for(let i = 1; i <= tables.tbl_time_intervals.total; i++){

  seeder.push({
      "ID": i,
      "INTERVALS": i, // Todo: create time intervals.
      "SORT_SEQUENCE": null
  })
}

module.exports = {
  "seeder": seeder, "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_TIME_INTERVALS"
}
