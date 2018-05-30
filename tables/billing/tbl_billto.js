const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_billto.types.forEach((type, i) => {
  seeder.push({
    "BILLTO_NAME": type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'TBL_BILLTO'
}