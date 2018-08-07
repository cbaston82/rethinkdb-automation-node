const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')
const demographics = require('../data/demographics')

// Initial state of seeder data.
const seeder = []
let attributesArray = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  // 1. Create a random array of attributes.
  let Attributes = random.arrayOfNumbers(demographics.tbl_attributes_master.types.length)

  if ((i % 2) === 0) Attributes.push(2) // if divisible by 2 add coach attribute.
  if ((i % 8) === 0) Attributes.push(8) // if divisible by 8 add trainer attribute

  // 3. Remove any duplicates
  attributesArray = Array.from(new Set(Attributes))

  seeder.push({
    'Attributes': attributesArray,
    'DATE_ADD': random.date(),
    'DATE_UPD': random.date(),
    'RCCID': 0, // Todo: Need to get program ID.
    'RECOVEREE_ID': i,
    'SERVICES_INITIATED': faker.random.words(5)
  })
}

// Data to be seeded to db.
const data = {
  'seeder': seeder,
  'indexes': ['Attributes', 'RCCID', 'RECOVEREE_ID'],
  'compoundIndexes': [],
  'table': 'tbl_Recoveree_Attributes'
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
