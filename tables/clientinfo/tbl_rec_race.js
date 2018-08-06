const clientinfo = require('../clientinfo')

// Seed data.
const seeder = []

// create seed data.
// for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  // seeder.push({
    // Todo: Figure out what data will be seeded.
  // })
// }

module.exports = {
  "seeder": seeder,
  "indexes": ['fk_RecovereeID'],
  "compoundIndexes": [],
  "table": "TBL_REC_RACE"
}
