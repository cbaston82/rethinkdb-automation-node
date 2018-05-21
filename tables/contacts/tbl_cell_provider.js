const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_cell_provider.types.forEach((type, i) => {
  seeder.push({
    "CELLULAR_PROVIDER":  type.CELLULAR_PROVIDER,
    "EMAIL_TEXT_PREFIX": null, // Todo: remove if not needed.
    "EMAIL_TEXT_SUFFIX":  type.EMAIL_TEXT_SUFFIX,
    "ID": i + 1,
    "SORT_SEQUENCE": null // Todo: remove if not needed.
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID','CELLULAR_PROVIDER'],
  "compoundIndexes" : [],
  "table" : "TBL_CELL_PROVIDER"
}
