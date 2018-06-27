const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_rec_coaching_groups.types.forEach((type, i) => {
  seeder.push({
    // Todo. find out what data to seed.
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": [],
  "compoundIndexes": [],
  "table": "TBL_REC_COACHING_GROUPS"
}