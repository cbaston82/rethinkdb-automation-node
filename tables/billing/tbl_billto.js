const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_billto.bill_types.forEach((type, i) => {
  seeder.push({
    "BILLTO_NAME":  type,
    "ID": i + 1,
    "SORT_SEQUENCE": 0 // Todo: remove if not needed
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : 'TBL_BILLTO'
}
