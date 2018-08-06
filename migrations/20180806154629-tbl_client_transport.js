const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../tables/clientinfo')
const demographics = require('../tables/demographics/demographics')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "RECOVEREE_ID": i,
    "TYPE_OF_TRANS": random.number(demographics.tbl_transportation_type.types.length),
    "VALID_LICENSE": faker.random.boolean(),
    "LICENSE_EXPLANATION": faker.lorem.sentences()
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID', 'TYPE_OF_TRANS'],
  "compoundIndexes": [],
  "table": 'TBL_CLIENT_TRANSPORT'
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
