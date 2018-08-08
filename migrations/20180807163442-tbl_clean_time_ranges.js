const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').medicalConfig

// Get any data needed for use in seeder.
const person = require('../data/person.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
person.tbl_clean_time_ranges.types.forEach((type, i) => {
  seeder.push({
    "DESC": type.DESC,
    "HIGH_NBR_OFDAYS": type.HIGH_NBR_OFDAYS,
    "ID": i + 1,
    "LOW_NBR_OFDAYS": type.LOW_NBR_OFDAYS
  })
})

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_CLEAN_TIME_RANGES"
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
