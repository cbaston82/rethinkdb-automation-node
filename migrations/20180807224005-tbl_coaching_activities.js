const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').coachingConfig

// Get any data needed for use in seeder.
const coaching = require('../tables/coaching.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
coaching.tbl_coaching_activities.types.forEach((type, i) => {
  seeder.push({
    "COACHING_ACTIVITY": type,
    "DX_CODE": null, // Todo: remove if not needed.
    "HCPC_CODE": null, // Todo: remove if not needed.
    "ID": i + 1,
    "PROC_CODE": null, // Todo: remove if not needed.
    "RECOVERY_PLAN_GOAL": 0, // Question: how does this work?
    "TIME_ALLOWED": null // Todo: remove if not needed.
  })
})

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_COACHING_ACTIVITIES"
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
