const upDown = require('../helpers/updown')

const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').billingConfig

// Get any data needed for use in seeder.
const billing = require('../data/billing.json')
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  // some dates to make dates flow correctly.
  let DATE_ADD = new Date()
  DATE_ADD.setDate(DATE_ADD.getDate() - random.number(365))

  let DATE_UPD = new Date(DATE_ADD)
  DATE_UPD.setDate(DATE_UPD.getDate() + 7)

  let END_DATE = new Date(DATE_UPD)
  END_DATE.setDate(END_DATE.getDate() + 7)

  seeder.push({
    BHPROVIDER: null, // Question: What is this?. This is set to null on front end.
    COUNTY: faker.address.county(),
    DATE_ADD: random.date(DATE_ADD),
    DATE_UPD: random.date(DATE_UPD),
    EFF_DATE: random.date(DATE_UPD),
    END_DATE: random.date(END_DATE),
    HAVE: faker.random.boolean(),
    RECOVEREE_ID: i,
    RECOVEREE_INS: random.number(billing.tbl_medical_ins.types.length),
    SIGNUP: null, // Question: What is is this? This is set to null by default.
    USERNAME_ADD: faker.internet.userName(),
    USERNAME_UPD: faker.internet.userName(),
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['date_add', 'eff_date', 'recoveree_id', 'recoveree_ins'],
  compoundIndexes: [],
  table: 'TBL_REC_MEDICAL_INS'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

