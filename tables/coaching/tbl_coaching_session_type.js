const coaching = require('./coaching')

// Seed data.
const seeder = []

// create seed data.
coaching.tbl_coaching_session_type.types.forEach((type, i) => {
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
