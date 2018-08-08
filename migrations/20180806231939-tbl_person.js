const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').personConfig

// Get any data needed for use in seeder.
// const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= 0; i++) {

  seeder.push({
    "ID": i
    // Todo: Figure out what data this will take.
  })
}

const data  = {
  "seeder": seeder,
  "indexes": [],
  "compoundIndexes": [],
  "table": "TBL_PERSON"
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
