const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').contactsConfig

// Get any data needed for use in seeder.
const contacts = require('../data/contacts.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
contacts.tbl_cell_provider.types.forEach((type, i) => {
  seeder.push({
    "CELLULAR_PROVIDER": type.CELLULAR_PROVIDER,
    "EMAIL_TEXT_PREFIX": null,
    "EMAIL_TEXT_SUFFIX": type.EMAIL_TEXT_SUFFIX,
    "ID": i + 1
  })
})

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID', 'CELLULAR_PROVIDER'],
  "compoundIndexes": [],
  "table": "TBL_CELL_PROVIDER"
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
