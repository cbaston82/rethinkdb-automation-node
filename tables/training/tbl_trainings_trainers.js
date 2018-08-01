const clientinfo = require('../clientinfo/clientinfo')

// Seed data.
const seeder = []
let num = 2

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  // Many to one ids.
  if (num > clientinfo.tbl_recoverees.total) num = 2

  seeder.push({
    "Trainer": num,
    "TrainingID": 5, // Question: get the training id?
    "TrainingsFacilID": i
  })
  num += 2 // by default only trainers with even id are assigned the trainer attribute.
}

module.exports = {
  "seeder": seeder,
  "indexes": ['Trainer', 'TrainingID', 'TrainingsFacilID'],
  "compoundIndexes": [],
  "table": "tbl_trainings_trainers"
}
