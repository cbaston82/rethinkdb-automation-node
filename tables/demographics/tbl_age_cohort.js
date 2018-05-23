const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_age_cohort.types.forEach((type, i) => {
  seeder.push({
    "DESCRIPTION":  type.DESCRIPTION,
    "END_AGE": type.END_AGE,
    "ID": i + 1,
    "START_AGE": type.START_AGE,
    "USERNAME": "faker.internet.userName())" // Todo: remove if not needed, random username required
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID', 'START_AGE', 'END_AGE'],
  "compoundIndexes" : [],
  "table" :"TBL_AGE_COHORT"
}
