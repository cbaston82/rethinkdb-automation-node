const clientinfo = require('./clientinfo')

// Seed data.
const seeder = []

// create seed data.
clientinfo.tbl_rec_family_groups.types.forEach((type, i) => {
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
