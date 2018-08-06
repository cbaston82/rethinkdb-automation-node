const faker = require('faker')
const random = require('../../helpers/random')
const clientinfo = require('../clientinfo')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "COMPLETED": random.number(),
    "ItemDiscussedID": i,
    "NOTES": faker.lorem.words(2),
    "fk_ItemID": i,
    "fk_TERecID": i
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ItemDiscussedID', 'fk_ItemID', 'fk_TERecID'],
  "compoundIndexes": [],
  "table": "tbl_rec_TE_activity"
}
