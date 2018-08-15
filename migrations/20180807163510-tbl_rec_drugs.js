const upDown = require('../helpers/updown')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').medicalConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')
const medical = require('../data/medical.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    RecovereeAttributeID: 2, // Todo: remove if not needed
    fk_AttributeID: random.number(medical.tbl_drugs.types.length),
    fk_RecovereeID: i
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['RecovereeAttributeID'],
  compoundIndexes: [],
  table: 'TBL_REC_DRUGS'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
