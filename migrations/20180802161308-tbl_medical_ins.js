const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const {settings} = require('../configuration/automate-config')

const billing = require('../tables/billing/billing.json')

// Seed data.
const seeder = []

// create seed data.
billing.tbl_medical_ins.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "INSURANCE_CARRIER": type
  })
})

const data = module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_MEDICAL_INS"
}

module.exports.up = async function (r, connection) {
  if (settings.billing.automate && !settings.billing.exclude.includes(data.table)) {
    const promiseThing = await migrate.up(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}

module.exports.down = async function (r, connection) {
  if (settings.billing.automate && !settings.billing.exclude.includes(data.table)) {
    const promiseThing = await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}
