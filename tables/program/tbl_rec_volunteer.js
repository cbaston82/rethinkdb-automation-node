const random = require('../../helpers/random')
const faker = require('faker')
const clientinfo = require('../clientinfo')
const coaching = require('../coaching/coaching')
const billing = require('../billing')
const programs = require('./programs')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "RECOVEREE_ID": i,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName(),
    "VOL_ACTIVITY": random.number(coaching.tbl_volunteer_activities.types.length),
    "VOL_BILLTO": random.number(billing.tbl_billto.types.length),
    "VOL_CATEGORY": random.number(coaching.tbl_volunteer_category.types.length),
    "VOL_DATE": random.date(),
    "VOL_HOURS": random.number(8),
    "VOL_LOCATION": random.number(programs.tbl_rcc.types.length),
    "VOL_MIN": random.number(59)
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID', 'VOL_DATE', 'VOL_LOCATION'],
  "compoundIndexes": [{
    "name": "VOL_info",
    "indexes": ['VOL_DATE', 'VOL_LOCATION']
  }],
  "table": "TBL_REC_VOLUNTEER"
}
