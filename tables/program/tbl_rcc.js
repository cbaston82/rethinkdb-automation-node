const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_rcc.types.forEach((type, i) => {
  seeder.push({
      "ID": i +1,
      "RCC": type,
    })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_RCC"
}
