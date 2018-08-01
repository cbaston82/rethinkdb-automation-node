const random = require('../../helpers/random/index')
const faker = require('faker')
const clientinfo = require('../clientinfo/clientinfo')
const employment = require('./employment')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {


  // some dates to make dates flow correctly.
  let AS_OF = new Date();
  AS_OF.setDate(AS_OF.getDate() - random.number(365))

  let DATE_UPD = new Date(AS_OF)
  DATE_UPD.setDate(DATE_UPD.getDate() + 7)

  let END_DATE = new Date(DATE_UPD)
  END_DATE.setDate(END_DATE.getDate() + 7)

  seeder.push({
    "AS_OF": random.isoDateFormatTimeCreate(AS_OF),
    "DATE_ADD": random.isoDateFormatTimeCreate(AS_OF),
    "DATE_UPD": random.isoDateFormatTimeCreate(DATE_UPD),
    "END_DATE": random.isoDateFormatTimeCreate(END_DATE),
    "RECOVEREE_EFF_DATE": random.isoDateFormatTimeCreate(AS_OF),
    "TRAINING_TECHNICAL_EDUCATION": faker.lorem.words(),
    "TRADE_OR_SKILL": faker.random.boolean(),
    "TRADE_OR_SKILL_SPECIFY": faker.random.words(),
    "USUAL_OCCUPATION": faker.random.words(),
    "FINANCIAL_SUPPORT": faker.random.boolean(),
    "RECOVEREE_EMPLOYMENT": random.number(employment.tbl_employment.types.length),
    "RECOVEREE_ID": i,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_EMPLOYMENT"
}
