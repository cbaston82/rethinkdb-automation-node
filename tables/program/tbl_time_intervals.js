const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= tables.tbl_time_intervals.total; i++) {

  seeder.push({
    'ID': i,
    'INTERVALS': i * 5,
    'SORT_SEQUENCE': null // TODO: remove!!!
  })
}

module.exports = {
  'seeder': seeder, 'indexes': ['ID'],
  'compoundIndexes': [],
  'table': 'TBL_TIME_INTERVALS'
}
