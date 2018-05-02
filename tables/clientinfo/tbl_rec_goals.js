const faker = require('faker')
const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
// TODO: Finish seeding - where ever "// seed".
for(let i = 1; i <= tables.tbl_rec_goals.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "BARRIERS":  faker.lorem.words(5),
    "DATE_ADD": random.isoRandomDateFormatTimeCreate(),
    "DATE_GOAL_ANTICIPATED":  random.isoRandomDateFormatTimeCreate(),
    "DATE_GOAL_CANCELLED":  random.isoRandomDateFormatTimeCreate(),
    "DATE_GOAL_MET":  random.isoRandomDateFormatTimeCreate(),
    "DATE_GOAL_SET":  random.isoRandomDateFormatTimeCreate(),
    "DATE_UPD": random.isoRandomDateFormatTimeCreate(),
    "GOAL": faker.lorem.sentences(3),
    "GOAL_ID": i,
    "INTAKE_DATE": random.isoRandomDateFormatTimeCreate(),
    "RECOVEREE_ID": recId,
    "RECOVERY_COACH": 2, // seed
    "RNUM": 2, // seed depends on reports generated
    "STRENGTHS": faker.lorem.words(4),
    "USERNAME_ADD":  "jrbuser",
    "USERNAME_UPD":  "jrbuser",
    "WANTS_TO_PASS": 0, // seed
    "WELLNESS_AREA": Math.floor(Math.random() * 11) + 1
  })
  recId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['GOAL_ID', 'RECOVEREE_ID', 'RNUM'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_GOALS"
}
