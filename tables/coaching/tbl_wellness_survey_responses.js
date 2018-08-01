const coaching = require('./coaching')

// Seed data.
const seeder = []

// create seed data.
coaching.tbl_wellness_survey_responses.types.forEach((type, i) => {
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
  "table": "TBL_WELLNESS_SURVEY_RESPONSES"
}
