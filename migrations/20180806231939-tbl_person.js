const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').personConfig

// Get any data needed for use in seeder.
// const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= 0; i++) {

  seeder.push({
    ID: i
    // Todo: Figure out what data this will take.
  })
}

const data = {
  seeder: seeder,
  indexes: [],
  compoundIndexes: [],
  table: 'TBL_PERSON'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

