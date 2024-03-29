const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').trainingConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')
const training = require('../data/training.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    ID: i,
    GROUP: random.number(training.tbl_trainings_events_groups.types.length),
    IS_THIS_A_TRAINING: 0, // Question: All set to 0 by default in db.
    TRAININGS_EVENTS_NAME: faker.random.word()
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID', 'GROUP', 'TRAININGS_EVENTS_NAME'],
  compoundIndexes: [],
  table: 'TBL_TRAININGS_EVENTS'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
