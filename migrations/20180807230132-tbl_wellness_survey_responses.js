const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').coachingConfig

// Get any data needed for use in seeder.
const coaching = require('../data/coaching.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
coaching.tbl_wellness_survey_responses.types.forEach((type, i) => {
  seeder.push({
    DESCRIPTION: type.DESCRIPTION,
    ID: i + 1,
    VISUAL: type.VISUAL
  })
})

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: [],
  compoundIndexes: [],
  table: 'TBL_WELLNESS_SURVEY_RESPONSES'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
