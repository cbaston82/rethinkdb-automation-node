const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').demographicsConfig

// Get any data needed for use in seeder.
const demographics = require('../data/demographics.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
demographics.tbl_non_cash_benefit_types.types.forEach((type, i) => {
  seeder.push({
    NON_CASH_BENEFIT_TYPE: type,
    ID: i + 1
  })
})

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID'],
  compoundIndexes: [],
  table: 'TBL_NON_CASH_BENEFIT_TYPES'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

