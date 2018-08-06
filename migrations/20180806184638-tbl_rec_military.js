const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../tables/clientinfo.json')

// Seed data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "RECOVEREE_ID": i,
    "EVER_SERVED": faker.random.boolean(),
    "VETERAN": faker.random.boolean(),
    "VA_BENEFITS": faker.random.boolean(),
    "VA_SERVICES": faker.random.boolean()
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_MILITARY'
}

module.exports.up = async function (r, connection) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = await migrate.up(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}

module.exports.down = async function (r, connection) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}
