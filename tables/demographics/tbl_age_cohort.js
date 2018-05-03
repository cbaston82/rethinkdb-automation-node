const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_age_cohort.types.forEach((type, i) => {
  seeder.push({
    "DESCRIPTION":  type.description,
    "END_AGE": type.end,
    "ID": i + 1,
    "START_AGE": type.start,
    "USERNAME": "Curtiss" // Todo: remove if not needed
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID', 'START_AGE', 'END_AGE'],
  "compoundIndexes" : [],
  "table" :"TBL_AGE_COHORT"
}
