const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').trainingConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []
let num = 2

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  // Many to one ids.
  if (num > clientinfo.tbl_recoverees.total) num = 2
  seeder.push({
    Trainer: num,
    TrainingID: 5, // Question: get the training id?
    TrainingsFacilID: i
  })
  num += 2 // by default only trainers with even id are assigned the trainer attribute.
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['Trainer', 'TrainingID', 'TrainingsFacilID'],
  compoundIndexes: [],
  table: 'tbl_trainings_trainers'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
