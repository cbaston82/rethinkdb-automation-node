const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_wellness_survey_responses.types.forEach((type, i) => {
  seeder.push({
    "DESCRIPTION":  type.description,
    "ID": i + 1,
    "VISUAL":  type.visual
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : [],
  "compoundIndexes" : [],
  "table" : "TBL_WELLNESS_SURVEY_RESPONSES"
}
