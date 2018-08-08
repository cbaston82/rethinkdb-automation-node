const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').trainingConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "COMPLETED": random.number(),
    "ItemDiscussedID": i,
    "NOTES": faker.lorem.words(2),
    "fk_ItemID": i,
    "fk_TERecID": i
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ItemDiscussedID', 'fk_ItemID', 'fk_TERecID'],
  "compoundIndexes": [],
  "table": "tbl_rec_TE_activity"
}

async function test (r, connection, data, direction) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = (direction === 'up')
      ? await migrate.up(r, connection, data)
      : await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}

module.exports.up = async function (r, connection) {
  await test(r, connection, data, 'up')
}

module.exports.down = async function (r, connection) {
  await test(r, connection, data, 'down')
}
