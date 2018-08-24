const upDown = require('../helpers/updown')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').medicalConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')
const demographics = require('../data/demographics.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    RECOVEREE_ID: i,
    ID: i,
    IDENTIFICATIONS_TYPES: random.arrayOfNumbers(demographics.tbl_identification_types.types.length),
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['RECOVEREE_ID', 'ID'],
  compoundIndexes: [],
  table: 'TBL_REC_IDENTIFICATIONS'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

