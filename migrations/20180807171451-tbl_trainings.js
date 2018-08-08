const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').trainingConfig

// Get any data needed for use in seeder.
const training = require('../data/training.json')
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "ID": i,
    "TRAINING_COUNT": random.number(20),
    "TRAINING_DATE": random.date(),
    "TRAINING_LOCATION": random.number(training.tbl_training_event_locations.types.length),
    "TRAINING_NAME": random.number(training.tbl_training_event_locations.types.length), // Question: is this correct?
    "TRAINING_NOTES": faker.lorem.sentences(2),
    "TRAINING_TRAINERS": "",
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID', 'TRAINING_DATE', 'TRAINING_NAME'],
  "compoundIndexes": [],
  "table": "TBL_TRAININGS"
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
