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


  seeder.push({
    "ACTION_PLAN_RECOVEREE": "",
    "ACTION_PLAN_STAFF": "",
    "BILLABLE": random.number(),
    "CHECK_IN": "",
    "COACHED_BY": random.personType(2),
    "COACHING_DATE": random.date(),
    "COACHING_LOCATION": random.number(tables.tbl_rcc.types.length),
    "COACHING_MINUTES": random.number(59),
    "COACHING_NOTES": faker.lorem.sentences(3),
    "COACHING_SESSION_TYPE": random.number(tables.tbl_coaching_session_type.types.length),
    "COMMUNITY_LOCATION": "",
    "CONNECTING": "",
    "CoachingRecID": i, // Question: is this incremental.
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "DISCUSSION_ITEMS": faker.random.words(4),
    "DOMAIN_GOAL": "",
    "END_TIME": "",
    "GOALS": faker.lorem.sentences(3),
    "NEEDS_AND_CONCERNS": faker.lorem.sentences(2),
    "NEXT_MTG_DATE": "",
    "NEXT_MTG_TIME": "",
    "OTHER_DISCUSSION_ITEM": faker.lorem.words(4),
    "RECOVEREE_ID": recId,
    "REC_COACHING_ACTIVITY": "",
    "RNUM": i,
    "SELF_CARE": "",
    "SERVICE_LOCATION": random.number(tables.tbl_training_event_locations.types.length),
    "START_TIME": "",
    "TBD": 0,
    "USERNAME_ADD": "",
    "USERNAME_UPD": "",
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "compoundIndexes": [{
    "name": "rec_coaching_info",
    "indexes": [
      "RECOVEREE_ID",
      "RNUM"
    ]
  }],
  "table": "TBL_REC_COACHING"
}