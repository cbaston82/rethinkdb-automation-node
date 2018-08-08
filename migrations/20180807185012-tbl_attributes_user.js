const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').demographicsConfig

// Get any data needed for use in seeder.
const demographics = require('../data/demographics.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
demographics.tbl_attributes_user.types.forEach((type, i) => {
  seeder.push({
    "AttributeID": i + 1,
    "AttributeName": type,
    "UserName": faker.internet.userName()
  })
})

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['AttributeID', 'ReportSelection'],
  "compoundIndexes": [],
  "table": "tbl_Attributes_user"
}

async function migrateNow (r, connection, data, direction) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = (direction === 'up')
      ? await migrate.up(r, connection, data)
      : await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}

module.exports.up = async function (r, connection) {
  await migrateNow(r, connection, data, 'up')
}

module.exports.down = async function (r, connection) {
  await migrateNow(r, connection, data, 'down')
}
