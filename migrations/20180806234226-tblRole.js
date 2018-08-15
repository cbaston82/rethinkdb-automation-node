const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').systemConfig

// Get any data needed for use in seeder.
const system = require('../data/system.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
system.tblrole.types.forEach((type, i) => {
  seeder.push({
    RoleID: i + 1,
    Rolename: type
  })
})

const data = {
  seeder: seeder,
  indexes: ['RoleID'],
  compoundIndexes: [],
  table: 'tblRole'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
