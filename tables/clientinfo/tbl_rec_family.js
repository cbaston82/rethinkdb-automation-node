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

  let DATE_ADD = new Date();
  DATE_ADD.setDate(DATE_ADD.getDate() - random.number(365))

  let DATE_UPD = new Date(DATE_ADD)
  DATE_UPD.setDate(DATE_UPD.getDate() + 7)

  let END_DATE = new Date(DATE_UPD)
  END_DATE.setDate(END_DATE.getDate() + 7)

  // Logic for children in custody vs non custody.
  let TOTAL_CHILDREN = random.number(5)
  let TOTAL_CHILDREN_CUSTOD = random.number(TOTAL_CHILDREN)
  let TOTAL_CHILDREN_INCUSTODY = TOTAL_CHILDREN - TOTAL_CHILDREN_CUSTOD

  seeder.push({
    "DATE_ADD": random.isoDateFormatTimeCreate(DATE_ADD),
    "DATE_UPD": random.isoDateFormatTimeCreate(DATE_UPD),
    "EFF_DATE": random.isoDateFormatTimeCreate(DATE_UPD),
    "END_DATE": random.isoDateFormatTimeCreate(END_DATE),
    "RECOVEREE_FAMILY": random.number(tables.tbl_family.types.length),
    "RECOVEREE_ID": recId,
    "TOTAL_CHILDREN": TOTAL_CHILDREN,
    "TOTAL_CHILDREN_CUSTOD": TOTAL_CHILDREN_CUSTOD,
    "TOTAL_CHILDREN_NONCUSTOD": TOTAL_CHILDREN_INCUSTODY,
    "MINOR_CHILDREN": random.number(TOTAL_CHILDREN),
    "WELFARE_SERVICES": faker.random.boolean(),
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
