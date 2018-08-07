const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').surveysConfig

// Get any data needed for use in seeder.
const surveys = require('../tables/surveys.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
surveys.tbl_qol_survey_responses.types.forEach((type, i) => {
  seeder.push({
    "COLUMN_HEADING": type.COLUMN_HEADING,
    "COLUMN_HEADING_SP": type.COLUMN_HEADING_SP,
    "DESCRIPTION": type.DESCRIPTION,
    "DESCRIPTION_SP": type.DESCRIPTION_SP,
    "GROUP": type.GROUP,
    "ID": type.ID,
    "VISUAL": type.VISUAL
  })
})

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": [],
  "compoundIndexes": [],
  "table": "TBL_QOL_SURVEY_RESPONSES"
}

module.exports.up = async function (r, connection) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = await migrate.up(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}

module.exports.down = async function (r, connection) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}
