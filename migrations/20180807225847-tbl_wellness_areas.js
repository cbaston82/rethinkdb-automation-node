const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').coachingConfig

// Get any data needed for use in seeder.
const coaching = require('../tables/coaching.json')

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
