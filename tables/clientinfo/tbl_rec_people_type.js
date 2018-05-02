const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
// Todo: Rip out RecovereeAttributeID if not needed anymore.
for(let i = 1; i <= tables.tbl_rec_people_types.total; i++){

  // One to many ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "RecovereeAttributeID": 4,
    "fk_AttributeID": random.number(9), // Todo: pull number from tables-config tbl_ethnicity
    "fk_RecovereeID": recId
  })
  recId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['RecovereeAttributeID', 'fk_AttributeID', 'fk_RecovereeID'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_PEOPLE_TYPES"
}
