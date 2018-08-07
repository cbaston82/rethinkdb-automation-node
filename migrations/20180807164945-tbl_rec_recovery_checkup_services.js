const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').contactsConfig

// Get any data needed for use in seeder.
const contacts = require('../tables/contacts.json')
const clientinfo = require('../tables/clientinfo')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "Itemserviceid": i,
    "fk_recoverycheckupid": i,
    "fk_serviceid": random.number(contacts.tbl_checkup_services.types.length)
  })
}

//Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['Itemserviceid', 'fk_recoverycheckupid', 'fk_serviceid'],
  "compoundIndexes": [],
  "table": "tbl_rec_recovery_checkup_services"
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