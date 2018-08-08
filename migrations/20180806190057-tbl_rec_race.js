const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= 0; i++) { // set to 0 for the moment.

  seeder.push({
  // Todo: Figure out what data will be seeded.
  })
}

const data = {
  "seeder": seeder,
  "indexes": ['fk_RecovereeID'],
  "compoundIndexes": [],
  "table": "TBL_REC_RACE"
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

