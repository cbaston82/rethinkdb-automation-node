const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../tables/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
clientinfo.tbl_rec_family_groups_children.types.forEach((type, i) => {
  type.children.forEach((child) => {
    seeder.push({
      "GROUP_ID": type.group,
      "NAME": child,
      "ID": i + 1
    })
  })
})

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_FAMILY_GROUPS_CHILDREN"
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











