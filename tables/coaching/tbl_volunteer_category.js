const coaching = require('./coaching')

// Seed data.
const seeder = []

// create seed data.
coaching.tbl_volunteer_category.types.forEach((type, i) => {
  seeder.push({
    "CATEGORY": type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_VOLUNTEER_CATEGORY"
}
