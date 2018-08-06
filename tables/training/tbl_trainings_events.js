const faker = require('faker')
const random = require('../../helpers/random')
const clientinfo = require('../clientinfo')
const training = require('./training')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "ID": i,
    "GROUP": random.number(training.tbl_trainings_events_groups.types.length),
    "IS_THIS_A_TRAINING": 0, // Question: All set to 0 by default in db.
    "TRAININGS_EVENTS_NAME": faker.random.word()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ID', 'GROUP', 'TRAININGS_EVENTS_NAME'],
  "compoundIndexes": [],
  "table": "TBL_TRAININGS_EVENTS"
}
