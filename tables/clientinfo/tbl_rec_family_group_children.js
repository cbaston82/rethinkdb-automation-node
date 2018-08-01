const clientinfo = require('./clientinfo')

// Seed data.
const seeder = []

let ID = 1

// create seed data.
clientinfo.tbl_rec_family_groups_children.types.forEach((type, i) => {
  type.children.forEach((child) => {
    seeder.push({
      "GROUP_ID": type.group,
      "NAME": child,
      "ID": i + 1
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
