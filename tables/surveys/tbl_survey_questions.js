const surveys = require('./surveys')

// Seed data.
const seeder = []

// create seed data.
surveys.tbl_survey_questions.types.forEach((type, i) => {
  seeder.push({
    "DESCRIPTION": type.DESCRIPTION,
    "DESCRIPTION_SP": type.DESCRIPTION_SP,
    "DOMAIN": type.DOMAIN,
    "GROUP": type.GROUP,
    "QUESTION": type.QUESTION,
    "SURVEY": type.SURVEY
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['QUESTION', 'SURVEY'],
  "compoundIndexes": [],
  "table": "TBL_SURVEY_QUESTIONS"
}
