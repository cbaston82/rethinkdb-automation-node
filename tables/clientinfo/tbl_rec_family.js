const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.tbl_rec_family.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "EFF_DATE": random.date(),
    "END_DATE": random.date(),
    "RECOVEREE_FAMILY": random.number(), // Todo: pull number from tables-config tbl_family
    "RECOVEREE_ID": recId,
    "TOTAL_CHILDREN": random.number(5),
    "TOTAL_CHILDREN_CUSTOD": random.number(5),
    "TOTAL_CHILDREN_NONCUSTOD":random.number(5),
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
