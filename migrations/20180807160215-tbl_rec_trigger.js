const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').ffrConfig

// Get any data needed for use in seeder.
const ffr = require('../data/ffr.json')
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "ACCEPTANCEGRATITUDE": {
      "ACCEPTANCE": faker.lorem.word(),
      "GRATITUDE": faker.lorem.word()
    },
    "ACTIVITIES": {
      "FRIDAY": faker.lorem.word(),
      "MONDAY": faker.lorem.word(),
      "SATURDAY": faker.lorem.word(),
      "SUNDAY": faker.lorem.word(),
      "THURSDAY": faker.lorem.word(),
      "TUESDAY": faker.lorem.word(),
      "WEDNESDAY": faker.lorem.word()
    },
    "CHALLENGES": {
      "FAMILYPLAN": faker.lorem.word(),
      "FAMILYPROBLEM": faker.lorem.word(),
      "FINANCIALPLAN": faker.lorem.word(),
      "FINANCIALPROBLEM": faker.lorem.word(),
      "LEGALPLAN": faker.lorem.word(),
      "LEGALPROBLEM": faker.lorem.word(),
      "LEISUREPLAN": faker.lorem.word(),
      "LEISUREPROBLEM": faker.lorem.word(),
      "WORKPLAN": faker.lorem.word(),
      "WORKPROBLEM": faker.lorem.word()
    },
    "DATE": random.date(),
    "RECOVEREE_ID": i,
    "SUPPORTGROUP": {
      "SUPPORTHELP": faker.lorem.word(),
      "SUPPORTNAME1": faker.lorem.word(),
      "SUPPORTNAME2": faker.lorem.word(),
      "SUPPORTNAME3":  faker.lorem.word(),
      "SUPPORTNAME4": faker.lorem.word(),
      "SUPPORTNUMBER1": faker.lorem.word(),
      "SUPPORTNUMBER2": faker.lorem.word(),
      "SUPPORTNUMBER3": faker.lorem.word(),
      "SUPPORTNUMBER4": faker.lorem.word()
    },
    "TRIGGERS": {
      "PLAN1": faker.lorem.word(),
      "PLAN2": faker.lorem.word(),
      "PLAN3":  faker.lorem.word(),
      "TRIGGER1": faker.lorem.word(),
      "TRIGGER2": faker.lorem.word(),
      "TRIGGER3": faker.lorem.word()
    }
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['DATE', 'RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_TRIGGER'
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
