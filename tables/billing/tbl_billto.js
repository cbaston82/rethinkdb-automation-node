const billing = require('./billing')

// Seed data.
const seeder = []

// create seed data.
billing.tbl_billto.types.forEach((type, i) => {
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
