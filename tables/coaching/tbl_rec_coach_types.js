const clientinfo = require('../clientinfo/clientinfo')

// Seed data.
const seeder = []

// Question: is this being used anywhere? did not find it on the front end.
// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "RecovereeAttributeID": i,
    "fk_AttributeID": i, // Question: should this be incremental?.
    "fk_RecovereeID": i
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RecovereeAttributeID', 'fk_RecovereeID'],
  "compoundIndexes": [],
  "table": "TBL_REC_COACH_TYPES"
}
