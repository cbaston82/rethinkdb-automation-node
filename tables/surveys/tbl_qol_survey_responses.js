const tables = require('../../configuration/tables-config')

const seeder = []

// create seed data.
tables.tbl_qol_survey_responses.types.forEach((type, i) => {
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

module.exports = {
  "seeder": seeder,
  "indexes": [],
  "compoundIndexes": [],
  "table": "TBL_QOL_SURVEY_RESPONSES"
}