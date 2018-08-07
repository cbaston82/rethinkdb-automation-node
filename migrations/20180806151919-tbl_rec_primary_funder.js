const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').billingConfig

// Get any data needed for use in seeder.
const clientinfo = require('../tables/clientinfo')
const demographics = require('../tables/demographics')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  let DATE_ADD = new Date();
  DATE_ADD.setDate(DATE_ADD.getDate() - random.number(365))

  let DATE_UPD = new Date(DATE_ADD)
  DATE_UPD.setDate(DATE_UPD.getDate() + 7)

  let END_DATE = new Date(DATE_UPD)
  END_DATE.setDate(END_DATE.getDate() + 7)

  seeder.push({
    "AS_OF": random.date(DATE_ADD),
    "DATE_ADD": random.date(DATE_UPD),
    "DATE_UPD": random.date(DATE_UPD),
    "END_DATE": random.date(END_DATE),
    "RECOVEREE_FUNDER": random.number(demographics.tbl_referred_by.types.length),
    "RECOVEREE_ID": i,
    "USERNAME_ADD":  faker.internet.userName(),
    "USERNAME_UPD":  faker.internet.userName()
  })
}

// Data to be seeded to db.
const data = module.exports = {
  "seeder": seeder,
  "indexes": ['AS_OF', 'END_DATE', 'RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_PRIMARY_FUNDER"
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
