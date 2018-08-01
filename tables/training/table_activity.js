const random = require('../../helpers/random')
const faker = require('faker')
const clientinfo = require('../clientinfo/clientinfo')
const training = require('./training')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "ID": i + 1,
    "ACTIVITY": faker.random.word(),
    "ACTIVITY_GROUP": random.number(training.tbl_activity_groups.types.length)
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'TBL_ACTIVITY'
}
