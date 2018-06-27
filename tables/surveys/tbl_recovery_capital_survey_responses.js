const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_recovery_capital_survey_responses.types.forEach((type, i) => {
  seeder.push({
    "DESCRIPTION": type.DESCRIPTION,
    "ID": i + 1,
    "VISUAL": type.VISUAL
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": [],
  "compoundIndexes": [],
  "table": "TBL_RECOVERY_CAPITAL_SURVEY_RESPONSES"
}