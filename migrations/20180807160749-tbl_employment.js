const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').employmentConfig

// Get any data needed for use in seeder.
const employment = require('../data/employment.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
employment.tbl_employment.types.forEach((type, i) => {
  seeder.push({
    EMPLOYMENT: type,
    ID: i + 1
  })
})

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID'],
  compoundIndexes: [],
  table: 'TBL_EMPLOYMENT'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

