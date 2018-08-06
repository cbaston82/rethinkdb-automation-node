const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../tables/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  let AS_OF = new Date();
  AS_OF.setDate(AS_OF.getDate() - random.number(365))

  let END_DATE = new Date(AS_OF)
  END_DATE.setDate(END_DATE.getDate() + 7)

  seeder.push({
    AS_OF: random.date(AS_OF),
    DATE_ADD: random.date(AS_OF),
    DATE_UPD: random.date(AS_OF),
    END_DATE: random.date(END_DATE),
    IN_RECOVERY: random.number(),
    RECOVERY_DATE: random.date(AS_OF),
    RECOVERY_ID: i,
    SOBRIETY_DATE: random.date(END_DATE),
    USERNAME_ADD: faker.internet.userName(),
    USERNAME_UPD: faker.internet.userName(),
    WHAT_IS_RECOVERY: faker.lorem.sentences()
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['RECOVERY_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_RECOVERY_STATUS"
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
