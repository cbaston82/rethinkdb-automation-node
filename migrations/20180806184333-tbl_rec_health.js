const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../tables/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "RECOVEREE_ID": i,
    "ID": i,
    "TIMES_HOSPITALIZED": random.number(5),
    "LAST_HOSPITALIZATION": random.date(),
    "MEDICAL_PROBLEMS": faker.random.boolean(),
    "MEDICAL_PROBLEMS_EXPLANATION": faker.lorem.words(),
    "PRESCRIBED_MEDICATION": faker.random.boolean(),
    "PRESCRIBED_MEDICATION_LIST": faker.lorem.words(),
    "PENSION": faker.random.boolean(),
    "PENSION_EXPLANATION": faker.lorem.words(),
    "NUTRITIONAL_LIFESTYLE": faker.random.word(),
    "PHYSICAL_LIFESTYLE": faker.random.word()
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_HEALTH'
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
