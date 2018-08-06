const clientinfo = require('../clientinfo')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "ID": i
    // Todo: Figure out what data this will take.
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": [],
  "compoundIndexes": [],
  "table": "TBL_PERSON"
}
