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
    "Attributes": random.arrayOfNumbers(16), // Todo: pull number from tables-config tbl_attributes_master
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "RCCID": 0, // Todo: Tie to a program
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
