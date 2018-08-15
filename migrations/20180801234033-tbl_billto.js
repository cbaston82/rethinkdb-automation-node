const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').billingConfig

// Get any data needed for use in seeder.
const billing = require('../data/billing.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
billing.tbl_billto.types.forEach((type, i) => {
  seeder.push({
    BILLTO_NAME: type,
    ID: i + 1
  })
})

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID', 'BILLTO_NAME'],
  compoundIndexes: [],
  table: 'TBL_BILLTO'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
