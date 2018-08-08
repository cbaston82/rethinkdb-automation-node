const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').surveysConfig

// Get any data needed for use in seeder.
const surveys = require('../data/surveys.json')

// Initial state of seeder data.
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

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID', 'SURVEY'],
  "compoundIndexes": [],
  "table": "TBL_SURVEY_NAMES"
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
