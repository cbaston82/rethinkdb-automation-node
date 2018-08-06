const random = require('../../helpers/random')
const clientinfo = require('../clientinfo')
const coaching = require('./coaching')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "ItemDiscussedID": i,
    "fk_CoachingRecID": random.number(clientinfo.tbl_recoverees.total),
    "fk_ItemID": random.number(coaching.tbl_wellness_areas.types.length)
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ItemDiscussedID', 'fk_CoachingRecID', 'fk_ItemID'],
  "compoundIndexes": [],
  "table": "tbl_rec_coaching_activity"
}
