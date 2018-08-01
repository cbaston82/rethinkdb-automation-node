const program = require('./programs')

// Seed data.
const seeder = []

// create seed data.
program.tbl_rcc.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "RCC": type,
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_RCC"
}
