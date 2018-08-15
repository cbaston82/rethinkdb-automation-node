const upDown = require('../helpers/updown')
const faker = require('faker')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').surveysConfig

// Get any data needed for use in seeder.
const surveys = require('../data/surveys.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
// Question: does this make sense. just creating a mapping for each survey name?.
surveys.tbl_survey_names.types.forEach((type, i) => {
  seeder.push({
    ID: type.ID,
    MAP: faker.lorem.word(),
    NAME: type.ABREV_NAME,
    FULL: type.SURVEY_NAME
  })
})

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID'],
  compoundIndexes: [],
  table: 'SURVEY_MAPPING'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
