const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').coachingConfig

// Get any data needed for use in seeder.
const coaching = require('../data/coaching.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
// coaching.tbl_rec_coaching_groups.types.forEach((type, i) => {
//   seeder.push({
// Todo. find out what data to seed.
//   })
// })

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": [],
  "compoundIndexes": [],
  "table": "TBL_REC_COACHING_GROUPS"
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

