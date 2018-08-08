const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').demographicsConfig

// Get any data needed for use in seeder.
const demographics = require('../data/demographics.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
demographics.tbl_language.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "LANGUAGE": type
  })
})

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_LANGUAGE"
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
