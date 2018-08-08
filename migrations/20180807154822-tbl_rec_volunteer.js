const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').programConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')
const programs = require('../data/programs.json')
const coaching = require('../data/coaching.json')
const billing = require('../data/billing.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "RECOVEREE_ID": i,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName(),
    "VOL_ACTIVITY": random.number(coaching.tbl_volunteer_activities.types.length),
    "VOL_BILLTO": random.number(billing.tbl_billto.types.length),
    "VOL_CATEGORY": random.number(coaching.tbl_volunteer_category.types.length),
    "VOL_DATE": random.date(),
    "VOL_HOURS": random.number(8),
    "VOL_LOCATION": random.number(programs.tbl_rcc.types.length),
    "VOL_MIN": random.number(59)
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID', 'VOL_DATE', 'VOL_LOCATION'],
  "compoundIndexes": [{
    "name": "VOL_info",
    "indexes": ['VOL_DATE', 'VOL_LOCATION']
  }],
  "table": "TBL_REC_VOLUNTEER"
}

async function migrateNow (r, connection, data, direction) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = (direction === 'up')
      ? await migrate.up(r, connection, data)
      : await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}

module.exports.up = async function (r, connection) {
  await migrateNow(r, connection, data, 'up')
}

module.exports.down = async function (r, connection) {
  await migrateNow(r, connection, data, 'down')
}
