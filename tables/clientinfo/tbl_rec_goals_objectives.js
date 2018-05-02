const random = require('../../helpers/random/index')
const faker = require('faker')
const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1
let goalId = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.tbl_rec_goals_objectives.total; i++){

  // Many to one ids. This is important.
  if(recId > tables.tbl_recoverees.total) recId = 1
  if(goalId > tables.tbl_rec_goals.total) goalId = 1

  seeder.push({
    "DATE_ADD": random.isoRandomDateFormatTimeCreate(),
    "DATE_OBJ_ANTICIPATED":  "",
    "DATE_OBJ_CANCELLED":  "",
    "DATE_OBJ_MET":  "",
    "DATE_OBJ_SET": random.isoRandomDateFormatTimeCreate(),
    "DATE_UPD": random.isoRandomDateFormatTimeCreate(),
    "FK_GOAL_ID": goalId,
    "OBJECTIVE":  faker.lorem.sentence(),
    "OBJECTIVE_ID": i,
    "USERNAME_ADD":  "jrbuser",
    "USERNAME_UPD":  "jrbuser"
  })
  recId++
  goalId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['FK_GOAL_ID', 'ID', 'OBJECTIVE_ID'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_GOALS_OBJECTIVES"
}
