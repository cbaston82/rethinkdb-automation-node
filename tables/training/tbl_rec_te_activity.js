const tables = require('../../configuration/tables-config')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1
let eventID = 1

// create seed data.
for (let i = 1; i <= tables.tbl_rec_te_activity.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_recoverees.total) recId = 1
  if (eventID > tables.tbl_trainings_events.total) eventID = 1

  seeder.push({
    "COMPLETED": 0,
    "ItemDiscussedID": i,
    "NOTES": faker.lorem.words(2),
    "fk_ItemID": eventID,
    "fk_TERecID": i
  })
  recId++
  eventID++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ItemDiscussedID', 'fk_ItemID', 'fk_TERecID'],
  "compoundIndexes": [],
  "table": "tbl_rec_TE_activity"
}