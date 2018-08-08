const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "RECOVEREE_ID": i,
    "ID": i,
    "RELIGIOUS_SPIRITUAL_BELIEFS": faker.random.boolean(),
    "CULTURAL_NEEDS_CONCERNS": faker.random.boolean(),
    "SEXUAL_PREFERENCES_ORIENTATION": faker.random.boolean(),
    "LANGUAGE": faker.random.boolean(),
    "OTHER": faker.lorem.words(),
    "DATE_CREATED": random.date()
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_PARTICIPATION_ABILITY'
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
