const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').systemConfig

// Get any data needed for use in seeder.
const system = require('../tables/system.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
system.tblrole.types.forEach((type, i) => {
  seeder.push({
    "RoleID": i + 1,
    "Rolename": type
  })
})

const data = {
  "seeder": seeder,
  "indexes": ['RoleID'],
  "compoundIndexes": [],
  "table": "tblRole"
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


