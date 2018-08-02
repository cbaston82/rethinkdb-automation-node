const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const {settings} = require('../configuration/automate-config')

const billing = require('../tables/billing/billing.json')

// Seed data.
const seeder = []

// create seed data.
billing.tbl_billto.types.forEach((type, i) => {
  seeder.push({
    'BILLTO_NAME': type,
    'ID': i + 1
  })
})

const data = {
  'seeder': seeder,
  'indexes': ['ID', 'BILLTO_NAME'],
  'compoundIndexes': [
    {
      name: 'billID',
      indexes: ['BILLTO_NAME', 'ID']
    }
  ],
  'table': 'TBL_BILLTO'
}

module.exports.up = async function (r, connection) {
  if (settings.billing.automate && !settings.billing.exclude.includes('TBL_BILLTO')) {
    const promiseThing = await migrate.up(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}


module.exports.down = async function (r, connection) {
  if (settings.billing.automate && !settings.billing.exclude.includes('TBL_BILLTO')) {
    const promiseThing = await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}
