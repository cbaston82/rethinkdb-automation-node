const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_education.types.forEach((type, i) => {
  seeder.push({
    "EDUCATION": type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_EDUCATION"
}

