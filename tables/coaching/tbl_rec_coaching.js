const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1
// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_coaching.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_recoverees.total) recId = 1

  // some dates to make dates flow correctly.
  let DATE_ADD = new Date();
  DATE_ADD.setDate(DATE_ADD.getDate() - random.number(365))

  let DATE_UPD = new Date(DATE_ADD)
  DATE_UPD.setDate(DATE_UPD.getDate() + 7)

  let NEXT_MTG_DATE = new Date(DATE_UPD)
  NEXT_MTG_DATE.setDate(NEXT_MTG_DATE.getDate() + 7)

  // Added this to make sure a recoveree is not assigned to them self as a coach.
  let COACHED_BY =  random.personType(2)
  while (COACHED_BY === recId) {
    COACHED_BY = random.personType(2)
  }

  seeder.push({
    "ACTION_PLAN_RECOVEREE": "",
    "ACTION_PLAN_STAFF": "",
    "BILLABLE": random.number(),
    "CHECK_IN": faker.lorem.words(3),
    "COACHED_BY": COACHED_BY,
    "COACHING_DATE": random.isoDateFormatTimeCreate(DATE_UPD),
    "COACHING_LOCATION": random.number(tables.tbl_rcc.types.length),
    "COACHING_MINUTES": random.number(tables.tbl_time_intervals.total),
    "COACHING_NOTES": faker.lorem.sentences(3),
    "COACHING_SESSION_TYPE": random.number(tables.tbl_coaching_session_type.types.length),
    "COMMUNITY_LOCATION": faker.lorem.words(3),
    "CONNECTING": faker.lorem.words(4),
    "CoachingRecID": i, // Question: is this incremental.
    "DATE_ADD": random.isoDateFormatTimeCreate(DATE_ADD),
    "DATE_UPD": random.isoDateFormatTimeCreate(DATE_UPD),
    "DISCUSSION_ITEMS": faker.random.words(4),
    "DOMAIN_GOAL": "",
    "END_TIME": "12:00 PM",
    "GOALS": faker.lorem.sentences(3),
    "NEEDS_AND_CONCERNS": faker.lorem.sentences(2),
    "NEXT_MTG_DATE": random.isoDateFormatTimeCreate(NEXT_MTG_DATE),
    "NEXT_MTG_TIME": "8:00 AM",
    "OTHER_DISCUSSION_ITEM": faker.lorem.words(4),
    "RECOVEREE_ID": recId,
    "REC_COACHING_ACTIVITY": "",
    "RNUM": i,
    "SELF_CARE": "",
    "SERVICE_LOCATION": random.number(tables.tbl_training_event_locations.types.length),
    "START_TIME": "11:00 AM",
    "TBD": random.number(),
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ["COACHED_BY", "COACHING_DATE", "COACHING_LOCATION", "RECOVEREE_ID", "RNUM"],
  "compoundIndexes": [{
    "name": "rec_coaching_info",
    "indexes": [
      "RECOVEREE_ID",
      "RNUM"
    ]
  }],
  "table": "TBL_REC_COACHING"
}
