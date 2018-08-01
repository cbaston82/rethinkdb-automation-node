const medical = require('./medical')

// Seed data.
const seeder = []

// create seed data.
medical.tbl_drugs_acquired.types.forEach((type, i) => {
  seeder.push({
    "DESC": type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_DRUGS_ACQUIRED"
}
