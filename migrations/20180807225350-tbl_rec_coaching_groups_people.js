const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').coachingConfig

// Get any data needed for use in seeder.
// const coaching = require('../data/coaching.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
// coaching.tbl_rec_coaching_groups_people.types.forEach((type, i) => {
//   seeder.push({
// Todo. Is this going to be types of total type of seed?
//   })
// })

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: [],
  compoundIndexes: [],
  table: 'TBL_REC_COACHING_GROUPS_PEOPLE'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
