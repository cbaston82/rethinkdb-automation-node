const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').demographicsConfig

// Get any data needed for use in seeder.
const demographics = require('../data/demographics.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
demographics.tbl_identification_types.types.forEach((type, i) => {
  seeder.push({
    IDENTIFICATION: type,
    ID: i + 1
  })
})

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID'],
  compoundIndexes: [],
  table: 'TBL_IDENTIFICATION_TYPES'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

