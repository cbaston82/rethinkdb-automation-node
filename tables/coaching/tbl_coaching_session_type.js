const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_coaching_session_type.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "SESSION_TYPE": type
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_COACHING_SESSION_TYPE"
}