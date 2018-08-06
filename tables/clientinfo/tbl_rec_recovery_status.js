const faker = require('faker')
const random = require('../../helpers/random')
const clientinfo = require('../clientinfo')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

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
    RECOVERY_ID: i,
    SOBRIETY_DATE: random.isoDateFormatTimeCreate(END_DATE),
    USERNAME_ADD: faker.internet.userName(),
    USERNAME_UPD: faker.internet.userName(),
    WHAT_IS_RECOVERY: faker.lorem.sentences()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVERY_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_RECOVERY_STATUS"
}
