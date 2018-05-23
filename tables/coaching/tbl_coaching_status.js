const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_coaching_status.types.forEach((type, i) => {
  seeder.push({
    "DESC": type.DESC,
    "DESC_SHORT": type.DESC_SHORT,
    "ID": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_COACHING_STATUS"
}
