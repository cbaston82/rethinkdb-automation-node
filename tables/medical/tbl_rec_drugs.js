const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')

// Seed data.
const seeder = []
let recId = 1

// create seed data.
for(let i = 1; i <= tables.tbl_rec_drugs.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "RecovereeAttributeID": 2, // Todo: remove if not needed
    "fk_AttributeID": random.number(tables.tbl_drugs.types.length),
    "fk_RecovereeID": recId
  })

  recId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['RecovereeAttributeID'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_DRUGS"
}
