const employment = require('./employment')

// Seed data.
const seeder = []

// create seed data.
employment.tbl_employment.types.forEach((type, i) => {
  seeder.push({
    "EMPLOYMENT": type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_EMPLOYMENT"
}
