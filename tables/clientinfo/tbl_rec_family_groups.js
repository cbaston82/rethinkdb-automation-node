const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_rec_family_groups.types.forEach((type, i) => {
    seeder.push({
      "NAME": type,
      "ID": i + 1
    })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_FAMILY_GROUPS"
}
