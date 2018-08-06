const faker = require('faker')
const random = require('../../helpers/random/index')
const clientinfo = require('../clientinfo')
const coaching = require('../coaching/coaching')

// Seed data.
const seeder = []

// create seed data - total is set in tables-config.
// TODO: Finish seeding - where ever "// seed".
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  // some dates to make dates flow correctly sort off.
  let DATE_ADD = new Date();
  DATE_ADD.setDate(DATE_ADD.getDate() - random.number(365))

  let DATE_UPD = new Date(DATE_ADD)
  DATE_UPD.setDate(DATE_UPD.getDate() + 7)

  let END_DATE = new Date(DATE_UPD)
  END_DATE.setDate(END_DATE.getDate() + 7)

  // Added this to make sure a recoveree is not assigned to them self as a coach.
  let COACHED_BY =  random.personType(2)
  while (COACHED_BY === i) {
    COACHED_BY = random.personType(2)
  }

  seeder.push({
    'BARRIERS': faker.lorem.words(5),
    'DATE_ADD': random.isoDateFormatTimeCreate(DATE_ADD),
    'DATE_GOAL_ANTICIPATED': random.isoDateFormatTimeCreate(DATE_ADD),
    'DATE_GOAL_CANCELLED': random.isoDateFormatTimeCreate(DATE_UPD),
    'DATE_GOAL_MET': random.isoDateFormatTimeCreate(DATE_UPD),
    'DATE_GOAL_SET': random.isoDateFormatTimeCreate(DATE_ADD),
    'DATE_UPD': random.isoDateFormatTimeCreate(DATE_UPD),
    'GOAL': faker.lorem.sentences(3),
    'GOAL_ID': i,
    'INTAKE_DATE': random.isoDateFormatTimeCreate(DATE_ADD),
    'RECOVEREE_ID': i,
    'RECOVERY_COACH': COACHED_BY,
    'RNUM': i,
    'STRENGTHS': faker.lorem.words(4),
    'USERNAME_ADD': faker.internet.userName(),
    'USERNAME_UPD': faker.internet.userName(),
    'WANTS_TO_PASS': faker.random.boolean(),
    'WELLNESS_AREA': random.number(coaching.tbl_wellness_areas.types.length)
  })
}

module.exports = {
  'seeder': seeder,
  'indexes': ['GOAL_ID', 'RECOVEREE_ID', 'RNUM'],
  'compoundIndexes': [],
  'table': 'TBL_REC_GOALS'
}
