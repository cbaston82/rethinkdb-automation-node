const tables = require('../../configuration/tables-config')
const faker = require('faker')
const random = require('../../helpers/random')

// Seed data.
const seeder = []

// create seed data.
for(let i = 1; i <= tables.tbl_trainings_events.total; i++){

  seeder.push( {
    "ID": i,
    "GROUP": random.number(tables.tbl_trainings_events_groups.types.length),
    "IS_THIS_A_TRAINING": 0, // Todo: Remove if not needed.
    "TRAININGS_EVENTS_NAME":  faker.random.word()
  })
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID', 'GROUP', 'TRAININGS_EVENTS_NAME'],
  "compoundIndexes" : [],
  "table" : "TBL_TRAININGS_EVENTS"
}
