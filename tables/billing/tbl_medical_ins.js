const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_medical_ins.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "INSURANCE_CARRIER":  type,
    "PUBLIC": 0, // Todo: remove if not needed
    "SORT_SEQUENCE": null // Todo: remove if not needed
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_MEDICAL_INS"
}
