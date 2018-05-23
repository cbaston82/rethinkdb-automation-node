const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []

// create seed data.
for(let i = 1; i <= tables.tbl_trainings_events.total; i++){

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "ID": i,
    "TRAINING_COUNT": random.number(20),
    "TRAINING_DATE": random.date(),
    "TRAINING_LOCATION": random.number(tables.tbl_training_event_locations.types.length),
    "TRAINING_NAME": random.number(tables.tbl_trainings_events.total), // Question: is this correct?
    "TRAINING_NOTES": faker.lorem.sentences(2),
    "TRAINING_TRAINERS": "",
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ID', 'TRAINING_DATE', 'TRAINING_NAME'],
  "compoundIndexes": [],
  "table": "TBL_TRAININGS"
}
