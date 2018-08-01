const surveys = require('./surveys')

// Seed data.
const seeder = []

// create seed data.
surveys.tbl_survey_names.types.forEach((type, i) => {
  seeder.push({
    "ABREV_NAME": type.ABREV_NAME,
    "FREQUENCY": type.FREQUENCY,
    "ID": type.ID,
    "MAX_SCORE": type.MAX_SCORE,
    "SURVEY_NAME": type.SURVEY_NAME
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID', 'SURVEY'],
  "compoundIndexes": [],
  "table": "TBL_SURVEY_NAMES"
}
