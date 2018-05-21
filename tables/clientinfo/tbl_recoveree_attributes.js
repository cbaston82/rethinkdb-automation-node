const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []
let attributesArray = []

// create seed data - create one record for each recoveree.
for(let i = 1; i <= tables.tbl_recoverees.total; i++){

  // 1. Create a random array of attributes.
  let Attributes = random.arrayOfNumbers(tables.tbl_attributes_master.types.length);

  // 2. Make sure even number recoverees has trainer attribute (8).
  if((i % 2) === 0) Attributes.push(8)

  // 3. Remove any duplicates.
  attributesArray = Array.from(new Set(Attributes));

  seeder.push({
    "Attributes": attributesArray,
    "DATE_ADD": random.date(),
    "DATE_UPD": random.date(),
    "RCCID": 0, // Todo: Tie to a program
    "RECOVEREE_ID": i,
    "SERVICES_INITIATED":  faker.random.words(5)
  })
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['Attributes', 'RCCID', 'RECOVEREE_ID'],
  "compoundIndexes" : [],
  "table" : "tbl_Recoveree_Attributes"
}
