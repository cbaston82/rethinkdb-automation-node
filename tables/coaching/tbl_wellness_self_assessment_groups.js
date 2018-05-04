const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_wellness_self_assessment_groups.types.forEach((type, i) => {
  seeder.push({
    "DESCRIPTION":  type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : [],
  "compoundIndexes" : [],
  "table" : "TBL_WELLNESS_SELF_ASSESSMENT_GROUPS"
}
