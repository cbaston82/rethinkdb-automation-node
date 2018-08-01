// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= 6; i++) {

  // just creating time intervals by 5.
  seeder.push({
    'ID': i,
    'INTERVALS': i * 5,
  })
}

module.exports = {
  'seeder': seeder,
  'indexes': ['ID'],
  'compoundIndexes': [],
  'table': 'TBL_TIME_INTERVALS'
}
