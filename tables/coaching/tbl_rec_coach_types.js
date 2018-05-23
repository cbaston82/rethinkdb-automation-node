const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1
// Question: is this being used anywhere? did not find it on the front end.
// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.tbl_rec_coach_types.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
      "RecovereeAttributeID": i,
      "fk_AttributeID": i, // Question: should this be incremental?.
      "fk_RecovereeID": recId
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RecovereeAttributeID', 'fk_RecovereeID'],
  "compoundIndexes": [],
  "table": "TBL_REC_COACH_TYPES"
}
