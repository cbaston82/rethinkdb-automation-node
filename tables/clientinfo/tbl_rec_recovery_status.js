const tables = require('../../configuration/tables-config')
const faker = require('faker')
const random = require('../../helpers/random')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for (let i = 1; i <= tables.tbl_rec_recovery_status.total; i++) {

  // Many to one ids.
  if (recId > tables.tbl_recoverees.total) recId = 1

  // Might seem like overkill. Doing this so dates make sense.
  let AS_OF = new Date();
  AS_OF.setDate(AS_OF.getDate() - random.number(365))

  let END_DATE = new Date(AS_OF)
  END_DATE.setDate(END_DATE.getDate() + 7)

  seeder.push({
    AS_OF: random.isoDateFormatTimeCreate(AS_OF),
    DATE_ADD: random.isoDateFormatTimeCreate(AS_OF),
    DATE_UPD: random.isoDateFormatTimeCreate(AS_OF),
    END_DATE: random.isoDateFormatTimeCreate(END_DATE),
    IN_RECOVERY: random.number(),
    RECOVERY_DATE: random.isoDateFormatTimeCreate(AS_OF),
    RECOVERY_ID: recId,
    SOBRIETY_DATE: random.isoDateFormatTimeCreate(END_DATE),
    USERNAME_ADD: faker.internet.userName(),
    USERNAME_UPD: faker.internet.userName(),
    WHAT_IS_RECOVERY: faker.lorem.sentences()
  })
  recId++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVERY_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_RECOVERY_STATUS"
}
