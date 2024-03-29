const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').employmentConfig

// Get any data needed for use in seeder.
const employment = require('../data/employment.json')
const clientinfo = require('../data/clientinfo.json')
const demographics = require('../data/demographics.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  // some dates to make dates flow correctly.
  let AS_OF = new Date()
  AS_OF.setDate(AS_OF.getDate() - random.number(365))

  let DATE_UPD = new Date(AS_OF)
  DATE_UPD.setDate(DATE_UPD.getDate() + 7)

  let END_DATE = new Date(DATE_UPD)
  END_DATE.setDate(END_DATE.getDate() + 7)

  seeder.push({
    AS_OF: random.date(AS_OF),
    DATE_ADD: random.date(AS_OF),
    DATE_UPD: random.date(DATE_UPD),
    END_DATE: random.date(END_DATE),
    RECOVEREE_EFF_DATE: random.date(AS_OF),
    TRAINING_TECHNICAL_EDUCATION: faker.lorem.words(),
    TRADE_OR_SKILL: faker.random.boolean(),
    TRADE_OR_SKILL_SPECIFY: faker.random.words(),
    USUAL_OCCUPATION: faker.random.words(),
    FINANCIAL_SUPPORT: faker.random.boolean(),
    RECOVEREE_EMPLOYMENT: random.number(employment.tbl_employment.types.length),
    RECOVEREE_ID: i,
    USERNAME_ADD: faker.internet.userName(),
    USERNAME_UPD: faker.internet.userName(),
    DESCRIBE_UNEMPLOYMENT: random.number(demographics.tbl_unemployment_types.types.length),
    WANT_HELP: faker.random.boolean(),
    WANT_HELP_TYPE: random.number(demographics.tbl_unemployment_help_types.types.length),
    INCOME_SOURCE: random.number(demographics.tbl_income_source_types.types.length),
    NON_CASH_BENEFITS: faker.random.boolean(),
    NON_CASH_BENEFITS_TYPE: random.number(demographics.tbl_non_cash_benefit_types.types.length)

  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['RECOVEREE_ID'],
  compoundIndexes: [],
  table: 'TBL_REC_EMPLOYMENT'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

