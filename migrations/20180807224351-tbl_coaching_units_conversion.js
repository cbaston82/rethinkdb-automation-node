const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').coachingConfig

// Get any data needed for use in seeder.
const programs = require('../tables/programs.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
// Looping through tlb_rcc to create unit conversion for each program.
programs.tbl_rcc.types.forEach((type, i) => {
  seeder.push({
    "ID": i + 1,
    "MINUTES_PER_UNIT": random.number(59),
    "PROGRAM": i + 1,
  })
})

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_COACHING_UNITS_CONVERSION"
}

module.exports.up = async function (r, connection) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = await migrate.up(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}

module.exports.down = async function (r, connection) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}
