const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').surveysConfig

// This is just an empty table. nothing to do here.
const data = {
  "seeder": [],
  "indexes": ['RECOVEREE_ID', 'SURVEY'],
  "compoundIndexes": [],
  "table": "TBL_TEMP_SURVEY_SCORES"
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
