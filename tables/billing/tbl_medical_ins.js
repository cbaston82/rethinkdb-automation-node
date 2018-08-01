const billing = require('./billing')

// Seed data.
const seeder = []

// create seed data.
billing.tbl_medical_ins.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "INSURANCE_CARRIER": type
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_MEDICAL_INS"
}
