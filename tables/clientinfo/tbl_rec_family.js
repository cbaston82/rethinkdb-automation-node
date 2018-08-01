const random = require('../../helpers/random/index')
const faker = require('faker')
const clientinfo = require('./clientinfo')
const demographics = require('../demographics/demographics')

// Seed data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

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
    "RECOVEREE_FAMILY": random.number(demographics.tbl_family.types.length),
    "RECOVEREE_ID": i,
    "TOTAL_CHILDREN": TOTAL_CHILDREN,
    "TOTAL_CHILDREN_CUSTOD": TOTAL_CHILDREN_CUSTOD,
    "TOTAL_CHILDREN_NONCUSTOD": TOTAL_CHILDREN_INCUSTODY,
    "MINOR_CHILDREN": random.number(TOTAL_CHILDREN),
    "WELFARE_SERVICES": faker.random.boolean(),
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['DATE_ADD', 'RECOVEREE_FAMILY', 'RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_FAMILY"
}
