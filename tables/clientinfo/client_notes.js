const faker = require('faker')
const random = require('../../helpers/random/index')
const clientinfo = require('./clientinfo')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "ID": i,
    "NOTE": faker.random.words(10),
    "STAMP": random.date()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['ID', 'STAMP'],
  "compoundIndexes": [],
  "table": 'CLIENT_NOTES'
}
