const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').coachingConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  // some dates to make dates flow correctly.
  let DATE_ADD = new Date()
  DATE_ADD.setDate(DATE_ADD.getDate() - random.number(365))

  let DATE_UPD = new Date(DATE_ADD)
  DATE_UPD.setDate(DATE_UPD.getDate() + 7)

  let END_DATE = new Date(DATE_UPD)
  END_DATE.setDate(END_DATE.getDate() + 7)

  // Added this to make sure a recoveree is not assigned to them self as a coach.
  let COACHED_BY = random.personType(2)
  while (COACHED_BY === i) {
    COACHED_BY = random.personType(2)
  }

  seeder.push({
    ASSIGNED_DATE: random.date(DATE_ADD),
    COACHED_BY: COACHED_BY,
    DATE_ADD: random.date(DATE_ADD),
    DATE_UPD: random.date(DATE_UPD),
    END_DATE: random.date(END_DATE),
    RECOVEREE_ID: i,
    USERNAME_ADD: faker.internet.userName(),
    USERNAME_UPD: faker.internet.userName()
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['RECOVEREE_ID'],
  compoundIndexes: [],
  table: 'TBL_REC_COACH_ASSIGN'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
