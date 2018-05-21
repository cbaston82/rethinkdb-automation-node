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
    "DATE_ADD": random.date(),
    "DATE_GOAL_ANTICIPATED":  random.date(),
    "DATE_GOAL_CANCELLED":  random.date(),
    "DATE_GOAL_MET":  random.date(),
    "DATE_GOAL_SET":  random.date(),
    "DATE_UPD": random.date(),
    "GOAL": faker.lorem.sentences(3),
    "GOAL_ID": i,
    "INTAKE_DATE": random.date(),
    "RECOVEREE_ID": recId,
    "RECOVERY_COACH": 2, // Todo: Assign rcoveree with coatch attribute.
    "RNUM": 2, // Todo: dependon on reporting.
    "STRENGTHS": faker.lorem.words(4),
    "USERNAME_ADD":  "jrbuser",
    "USERNAME_UPD":  "jrbuser",
    "WANTS_TO_PASS": 0, // Question: what is this.
    "WELLNESS_AREA": random.number(tables.tbl_wellness_areas.types.length)
  })
  recId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['GOAL_ID', 'RECOVEREE_ID', 'RNUM'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_GOALS"
}
