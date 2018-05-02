const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
// Todo: Finish Seeding "// ??"
for(let i = 1; i <= tables.tbl_recoveree_attributes.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "Attributes": random.generateRandomNumberArray(30), // 1...30 possibility
    "DATE_ADD": random.isoRandomDateFormatTimeCreate(),
    "DATE_UPD": random.isoRandomDateFormatTimeCreate(),
    "RCCID": 0, // ?? depends on programs
    "RECOVEREE_ID": recId,
    "SERVICES_INITIATED":  faker.random.words(5)
  })
  recId++
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['Attributes', 'RCCID', 'RECOVEREE_ID'],
  "compoundIndexes" : [],
  "table" : "tbl_Recoveree_Attributes"
}
