const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_family.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_recoverees.total) recId = 1

  // Logic for children in custody vs non custody.
  let TOTAL_CHILDREN = random.number(5)
  let TOTAL_CHILDREN_CUSTOD = random.number(TOTAL_CHILDREN)
  let TOTAL_CHILDREN_INCUSTODY = TOTAL_CHILDREN - TOTAL_CHILDREN_CUSTOD

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "EFF_DATE": random.date(),
    "END_DATE": random.date(),
    "RECOVEREE_FAMILY": random.number(tables.tbl_family.types.length),
    "RECOVEREE_ID": recId,
    "TOTAL_CHILDREN": TOTAL_CHILDREN,
    "TOTAL_CHILDREN_CUSTOD": TOTAL_CHILDREN_CUSTOD,
    "TOTAL_CHILDREN_NONCUSTOD": TOTAL_CHILDREN_INCUSTODY,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['DATE_ADD', 'RECOVEREE_FAMILY', 'RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_FAMILY"
}