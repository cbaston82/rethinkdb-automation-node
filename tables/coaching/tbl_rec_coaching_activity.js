const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.tbl_rec_coaching_activity.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "ItemDiscussedID": i,
    "fk_CoachingRecID": random.number(tables.tbl_recoverees.total),
    "fk_ItemID": random.number(tables.tbl_wellness_areas.types.length)
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ItemDiscussedID', 'fk_CoachingRecID', 'fk_ItemID'],
  "compoundIndexes": [],
  "table": "tbl_rec_coaching_activity"
}

