const random = require('../../helpers/random')
const clientinfo = require('../clientinfo/clientinfo')
const medical = require('./medical')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "RecovereeAttributeID": 2, // Todo: remove if not needed
    "fk_AttributeID": random.number(medical.tbl_drugs.types.length),
    "fk_RecovereeID": i
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RecovereeAttributeID'],
  "compoundIndexes": [],
  "table": "TBL_REC_DRUGS"
}
