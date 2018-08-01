const coaching = require('./coaching')

// Seed data.
const seeder = []

// create seed data.
coaching.tbl_coach_certifications.types.forEach((type, i) => {
  seeder.push({
    "CERTIFICATION": type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_COACH_CERTIFICATION"
}
