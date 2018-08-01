const faker = require('faker')
const random = require('../../helpers/random')
const clientinfo = require('./clientinfo')
const demographics = require('../demographics/demographics')

// Seed data.
const seeder = []
let recId = 1

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "RECOVEREE_ID": i,
    "TYPE_OF_TRANS": random.number(demographics.tbl_transportation_type.types.length),
    "VALID_LICENSE": faker.random.boolean(),
    "LICENSE_EXPLANATION": faker.lorem.sentences()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID', 'TYPE_OF_TRANS'],
  "compoundIndexes": [],
  "table": 'TBL_CLIENT_TRANSPORT'
}
