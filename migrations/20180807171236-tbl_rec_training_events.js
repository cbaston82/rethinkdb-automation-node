const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').trainingConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')
const programs = require('../data/programs.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  // Might seem like overkill. Doing this so dates make sense.
  let DATE_ADD = new Date();
  DATE_ADD.setDate(DATE_ADD.getDate() - random.number(365))

  let TE_DATE = new Date(DATE_ADD)
  TE_DATE.setDate(TE_DATE.getDate() + 7)

  seeder.push({
    "DATE_ADD": random.date(DATE_ADD),
    "DATE_UPD": random.date(DATE_ADD),
    "RECOVEREE_ID": i,
    "TERecID": i,
    "TE_DATE": random.date(TE_DATE),
    "TE_LOCATION": random.number(programs.tbl_rcc.types.length),
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName(),
    "training_event": ""
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID', 'TE_DATE', 'TE_LOCATION', 'TERecID'],
  "compoundIndexes": [{
    "name": "TE_info",
    "indexes": ['TERecID', 'DATE_ADD']
  }],
  "table": "TBL_REC_TRAININGS_EVENTS"
}

async function test (r, connection, data, direction) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = (direction === 'up')
      ? await migrate.up(r, connection, data)
      : await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}

module.exports.up = async function (r, connection) {
  await test(r, connection, data, 'up')
}

module.exports.down = async function (r, connection) {
  await test(r, connection, data, 'down')
}
