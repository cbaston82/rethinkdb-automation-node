const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random/index')
const faker = require('faker')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_trigger.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_rec_trigger.total) recId = 1

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
    "RECOVEREE_ID": recId,
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
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['DATE', 'RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_TRIGGER'
}
