const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').coachingConfig

// Get any data needed for use in seeder.
const coaching = require('../data/coaching.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
coaching.tbl_wellness_areas.types.forEach((type, i) => {

  seeder.push({
    "DROPDOWN_DISPLAY": `${i + 1}. ${type}`,
    "ID": i + 1,
    "WELLNESS_AREA": type,
    "WELLNESS_AREA_NBR": i + 1
  })
})

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID', 'WELLNESS_AREA_NBR'],
  "compoundIndexes": [],
  "table": "TBL_WELLNESS_AREAS"
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
