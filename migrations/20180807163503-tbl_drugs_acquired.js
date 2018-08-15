const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').medicalConfig

// Get any data needed for use in seeder.
const medical = require('../data/medical.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
medical.tbl_drugs_acquired.types.forEach((type, i) => {
  seeder.push({
    DESC: type,
    ID: i + 1
  })
})

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID'],
  compoundIndexes: [],
  table: 'TBL_DRUGS_ACQUIRED'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
