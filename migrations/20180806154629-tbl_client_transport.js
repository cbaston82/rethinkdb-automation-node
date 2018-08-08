const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo')
const demographics = require('../data/demographics')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "RECOVEREE_ID": i,
    "TYPE_OF_TRANS": random.number(demographics.tbl_transportation_type.types.length),
    "VALID_LICENSE": faker.random.boolean(),
    "LICENSE_EXPLANATION": faker.lorem.sentences()
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID', 'TYPE_OF_TRANS'],
  "compoundIndexes": [],
  "table": 'TBL_CLIENT_TRANSPORT'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

