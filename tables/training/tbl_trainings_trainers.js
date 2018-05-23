const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 2

// create seed data.
for(let i = 1; i <= tables.tbl_trainings_trainers.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 2

  seeder.push({
    "Trainer": recId,
    "TrainingID": 5, // Question: get the training id?
    "TrainingsFacilID": i
  })
  recId += 2 // by default only trainers with even id are assigned the trainer attribute.
}

module.exports = {
  "seeder": seeder,
  "indexes": ['Trainer', 'TrainingID', 'TrainingsFacilID'],
  "compoundIndexes": [],
  "table": "tbl_trainings_trainers"
}
