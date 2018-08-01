const faker = require('faker')
const surveys = require('./surveys')

// Seed data.
const seeder = []

// create seed data.
// Question: does this make sense. just creating a mapping for each survey name?.
surveys.tbl_survey_names.types.forEach((type, i) => {
  seeder.push({
    "ID": type.ID,
    "MAP": faker.lorem.word(),
    "NAME": type.ABREV_NAME,
    "FULL": type.SURVEY_NAME
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'SURVEY_MAPPING'
}
