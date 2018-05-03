const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_referral_source.types.forEach((type, i) => {
  seeder.push({
    "DESC":  type,
    "ID": i + 1,
    "SORT_SEQUENCE": null // Todo: remove if not needed
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_REFERRAL_SOURCE"
}
