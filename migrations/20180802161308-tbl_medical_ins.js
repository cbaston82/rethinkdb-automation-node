const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').billingConfig

// Get any data needed for use in seeder.
const billing = require('../data/billing.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
billing.tbl_medical_ins.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "INSURANCE_CARRIER": type
  })
})

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'TBL_MEDICAL_INS'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

