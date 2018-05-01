const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')

// Seed data
const seeder = []
let recId = 1

// create seed data - total is set in tables-config
for(let i = 1; i <= tables.tbl_rec_family.total; i++){
  if(recId > tables.tbl_recoverees.total) recId = 1
  seeder.push({
    "DATE_ADD": random.isoRandomDateFormatTimeCreate(),
    "DATE_UPD": random.isoRandomDateFormatTimeCreate(),
    "EFF_DATE": random.isoRandomDateFormatTimeCreate(),
    "END_DATE": random.isoRandomDateFormatTimeCreate(),
    "RECOVEREE_FAMILY": Math.floor(Math.random() * 2) + 1,
    "RECOVEREE_ID": recId,
    "TOTAL_CHILDREN": Math.floor(Math.random() * 5 ) + 1,
    "TOTAL_CHILDREN_CUSTOD": Math.floor(Math.random() * 5 ) + 1,
    "TOTAL_CHILDREN_NONCUSTOD": Math.floor(Math.random() * 5 ) + 1,
    "USERNAME_ADD":  "jrbuser",
    "USERNAME_UPD":  "jrbuser"
  })
  recId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['DATE_ADD', 'RECOVEREE_FAMILY', 'RECOVEREE_ID'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_FAMILY"
}
