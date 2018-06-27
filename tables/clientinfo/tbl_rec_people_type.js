const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_people_types.total; i++) {

  // One to many ids.
  if (recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    'RecovereeAttributeID': 4, // Todo: remove if not needed.
    'fk_AttributeID': random.number(tables.tbl_people_types.types.length),
    'fk_RecovereeID': recId
  })
  recId++
}

module.exports = {
  'seeder': seeder,
  'indexes': ['RecovereeAttributeID', 'fk_AttributeID', 'fk_RecovereeID'],
  'compoundIndexes': [],
  'table': 'TBL_REC_PEOPLE_TYPES'
}
