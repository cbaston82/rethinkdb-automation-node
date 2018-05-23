const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []

// create seed data.
for(let i = 1; i <= tables.tbl_activity.total; i++){

  seeder.push({
    "ID": i + 1,
    "ACTIVITY": faker.random.word(),
    "ACTIVITY_GROUP": random.number(tables.tbl_activity_groups.types.length)
  })
}

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : 'TBL_ACTIVITY'
}
