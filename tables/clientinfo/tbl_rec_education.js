const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')

// Seed data
const seeder = []
let recId = 1

// create seed data - total is set in tables-config
for(let i = 1; i <= tables.tbl_rec_education.total; i++){
  if(recId > tables.tbl_recoverees.total) recId = 1
  seeder.push({
    "AS_OF": random.isoRandomDateFormatTimeCreate(),
    "COLLEGE": Math.floor(Math.random()),
    "DATE_ADD": random.isoRandomDateFormatTimeCreate(),
    "DATE_UPD": random.isoRandomDateFormatTimeCreate(),
    "END_DATE": random.isoRandomDateFormatTimeCreate(),
    "RECOVEREE_EDUCATION": Math.floor(Math.random() * 16) + 1 ,
    "RECOVEREE_EFF_DATE": random.isoRandomDateFormatTimeCreate(),
    "RECOVEREE_ID": recId,
    "USERNAME_ADD":  "Tetra",
    "USERNAME_UPD":  "Tetra"
  })
  recId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['AS_OF', 'RECOVEREE_ID'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_EDUCATION"
}
