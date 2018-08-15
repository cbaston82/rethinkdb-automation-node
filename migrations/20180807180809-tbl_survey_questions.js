const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').surveysConfig

// Get any data needed for use in seeder.
const surveys = require('../data/surveys.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
surveys.tbl_survey_questions.types.forEach((type, i) => {
  seeder.push({
    DESCRIPTION: type.DESCRIPTION,
    DESCRIPTION_SP: type.DESCRIPTION_SP,
    DOMAIN: type.DOMAIN,
    GROUP: type.GROUP,
    QUESTION: type.QUESTION,
    SURVEY: type.SURVEY
  })
})

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['QUESTION', 'SURVEY'],
  compoundIndexes: [],
  table: 'TBL_SURVEY_QUESTIONS'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
