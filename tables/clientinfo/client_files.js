const faker = require('faker')
const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.client_info.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "ID": recId,
    "FILENAME": "/" + faker.system.fileName(),
    "STAMP": random.date()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ID', 'FILENAME'],
  "compoundIndexes": [],
  "table" : 'CLIENT_FILES'
}
