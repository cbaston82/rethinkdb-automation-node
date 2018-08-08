const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').billingConfig

// Get any data needed for use in seeder.
const billing = require('../data/billing.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
billing.tbl_billto.types.forEach((type, i) => {
  seeder.push({
    'BILLTO_NAME': type,
    'ID': i + 1
  })
})

// Data to be seeded to db.
const data = {
  'seeder': seeder,
  'indexes': ['ID', 'BILLTO_NAME'],
  'compoundIndexes': [],
  'table': 'TBL_BILLTO'
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
