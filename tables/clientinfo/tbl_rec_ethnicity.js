const random = require('../../helpers/random')
const clientinfo = require('./clientinfo')
const demographics = require('../demographics/demographics')

// Seed data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "RecovereeAttributeID": 4, // Todo: remove if not needed.
    "fk_AttributeID": random.number(demographics.tbl_ethnicity.types.length),
    "fk_RecovereeID": i
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['fk_AttributeID', 'fk_RecovereeID'],
  "compoundIndexes": [],
  "table": "TBL_REC_ETHNICITY"
}
