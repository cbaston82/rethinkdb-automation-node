const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_institutions.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_client_transport.total) recId = 1

  seeder.push({
    "RECOVEREE_ID": recId,
    "TYPE_OF_TRANS": random.number()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID', 'TYPE_OF_TRANS'],
  "compoundIndexes": [],
  "table": 'TBL_CLIENT_TRANSPORT'
}
