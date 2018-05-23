const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data.
for(let i = 1; i <= tables.tbl_time_intervals.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "RECOVEREE_ID":  recId,
    "USERNAME_ADD":  faker.internet.userName(),
    "USERNAME_UPD":  faker.internet.userName(),
    "VOL_ACTIVITY": random.number(tables.tbl_volunteer_activities.types.length),
    "VOL_BILLTO": random.number(tables.tbl_billto.types.length),
    "VOL_CATEGORY": random.number(tables.tbl_volunteer_category.types.length),
    "VOL_DATE": random.date(),
    "VOL_HOURS": random.number(8),
    "VOL_LOCATION": random.number(tables.tbl_rcc.types.length),
    "VOL_MIN": random.number(59)
  })
  recId++

}

module.exports = {
  "seeder": seeder,
  "indexes" : ['RECOVEREE_ID', 'VOL_DATE', 'VOL_LOCATION'],
  "compoundIndexes" : [
    {
      "name" : "VOL_info",
      "indexes": ['VOL_DATE', 'VOL_LOCATION']
    }
  ],
  "table" : "TBL_REC_VOLUNTEER"
}
