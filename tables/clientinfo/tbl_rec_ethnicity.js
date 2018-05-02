const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
// Todo: Rip out RecovereeAttributeID if not needed anymore.
for(let i = 1; i <= tables.tbl_rec_ethnicity.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "RecovereeAttributeID": 4,
    "fk_AttributeID": Math.floor(Math.random() * 9) + 1,
    "fk_RecovereeID": recId
  })
  recId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['fk_AttributeID', 'fk_RecovereeID'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_ETHNICITY"
}
