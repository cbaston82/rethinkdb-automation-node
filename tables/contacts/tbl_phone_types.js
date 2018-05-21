const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_phone_types.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "PHONE_TYPE":  type,
    "SORT_SEQUENCE": null // Todo: remove if not needed.
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_PHONE_TYPES"
}
