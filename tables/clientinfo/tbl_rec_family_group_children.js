const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

let ID = 1

// create seed data.
tables.tbl_rec_family_groups_children.types.forEach((type) => {
  type.children.forEach((child) => {
    seeder.push({
      "GROUP_ID": type.group,
      "NAME": child,
      "ID": ID
    })
    ID ++
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_FAMILY_GROUPS_CHILDREN"
}
