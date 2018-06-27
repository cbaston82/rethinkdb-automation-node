const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_rec_coaching_groups_people.types.forEach((type, i) => {
  seeder.push({
    // Todo. Is this going to be types of total type of seed?
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": [],
  "compoundIndexes": [],
  "table": "TBL_REC_COACHING_GROUPS_PEOPLE"
}