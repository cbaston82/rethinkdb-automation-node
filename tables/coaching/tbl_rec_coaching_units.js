const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.tbl_rec_coaching_units.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  let units = random.number(10)
  let units_remaining = random.number(units)

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "EFF_DATE": random.date(),
    "END_DATE":  "",
    "ID": i,
    "MISSED": random.number(),
    "RECOVEREE_ID": recId,
    "UNITS_ALLOWED": units,
    "UNITS_REMAINING": units_remaining,
    "UNITS_USED": units - units_remaining,
    "USERNAME_ADD":  "jrbuser",
    "USERNAME_UPD":  "jrbuser"
  })
  recId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['EFF_DATE', 'ID', 'RECOVEREE_ID'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_COACHING_UNITS"
}
