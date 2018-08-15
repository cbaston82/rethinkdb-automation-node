const upDown = require('../helpers/updown')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').coachingConfig

// Get any data needed for use in seeder.
const coaching = require('../data/coaching.json')
const clientinfo = require('../data/clientinfo')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    ItemDiscussedID: i,
    fk_CoachingRecID: random.number(clientinfo.tbl_recoverees.total),
    fk_ItemID: random.number(coaching.tbl_wellness_areas.types.length)
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ItemDiscussedID', 'fk_CoachingRecID', 'fk_ItemID'],
  compoundIndexes: [],
  table: 'tbl_rec_coaching_activity'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
