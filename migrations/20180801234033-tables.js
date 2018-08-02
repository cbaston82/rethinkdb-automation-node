const migrate = require('../migrate-table')
const billing = require('../tables/billing/billing.json')
const resolver = require('../helpers/resolver')
// const connection = require('../database.json')

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
    },
    {
      name: 'IDbill',
      indexes: ['BILLTO_NAME', 'ID']
    }],
  'table': 'TBL_BILLTO'
}

/*const data = {
  'seeder': seeder,
  'indexes': ['ID'],
  'compoundIndexes': [{
    name: 'billID',
    indexes: ['BILLTO_NAME', 'ID']
  }],
  'table': 'TBL_BILLTO'
}*/

module.exports.up = async function (r, connection) {
  const promiseThing = await migrate.up(r, connection, data)
  resolver.resolveIt(promiseThing)
}

module.exports.down = async function (r, connection) {
  const promiseThing = await migrate.down(r, connection, data)
  resolver.resolveIt(promiseThing)
}
