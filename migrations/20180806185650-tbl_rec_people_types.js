const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')
const demographics = require('../data/demographics.json')

// Initial state of seeder data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    'RecovereeAttributeID': 4, // Todo: remove if not needed.
    'fk_AttributeID': random.number(demographics.tbl_people_types.types.length),
    'fk_RecovereeID': i
  })
}

// Data to be seeded to db.
const data = {
  'seeder': seeder,
  'indexes': ['RecovereeAttributeID', 'fk_AttributeID', 'fk_RecovereeID'],
  'compoundIndexes': [],
  'table': 'TBL_REC_PEOPLE_TYPES'
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
