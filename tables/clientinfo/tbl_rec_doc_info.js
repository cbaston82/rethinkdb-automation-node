const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.tbl_rec_doc_info.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "DATE_ADD": random.isoRandomDateFormatTimeCreate(),
    "DATE_ADDED": random.isoRandomDateFormatTimeCreate(),
    "DATE_UPD": random.isoRandomDateFormatTimeCreate(),
    "DRUG_COURT": Math.floor(Math.random()),
    "EFF_DATE": random.isoRandomDateFormatTimeCreate(),
    "END_DATE": random.isoRandomDateFormatTimeCreate(),
    "EVER_ARRESTED": Math.floor(Math.random()),
    "EVER_INCARCERATED": Math.floor(Math.random()),
    "EVER_ON_PAROLE": Math.floor(Math.random()),
    "EVER_ON_PROBATION": Math.floor(Math.random()),
    "ON_PAROLE_NOW": Math.floor(Math.random()),
    "ON_PROBATION_NOW": Math.floor(Math.random()),
    "RECOVERY_ID": recId,
    "USERNAME_ADD":  "jrbuser",
    "USERNAME_UPD":  "jrbuser"
  })
  recId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['EFF_DATE', 'RECOVERY_ID'],
  "compoundIndexes" : [],
  "table" : 'TBL_REC_DOC_INFO'
}
