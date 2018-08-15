const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')
const demographics = require('../data/demographics.json')

// Initial state of seeder data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  let DATE_ADD = new Date()
  DATE_ADD.setDate(DATE_ADD.getDate() - random.number(365))

  let DATE_UPD = new Date(DATE_ADD)
  DATE_UPD.setDate(DATE_UPD.getDate() + 7)

  let END_DATE = new Date(DATE_UPD)
  END_DATE.setDate(END_DATE.getDate() + 7)

  // Logic for children in custody vs non custody.
  let TOTAL_CHILDREN = random.number(5)
  let TOTAL_CHILDREN_CUSTOD = random.number(TOTAL_CHILDREN)
  let TOTAL_CHILDREN_INCUSTODY = TOTAL_CHILDREN - TOTAL_CHILDREN_CUSTOD

  seeder.push({
    DATE_ADD: random.date(DATE_ADD),
    DATE_UPD: random.date(DATE_UPD),
    EFF_DATE: random.date(DATE_UPD),
    END_DATE: random.date(END_DATE),
    RECOVEREE_FAMILY: random.number(demographics.tbl_family.types.length),
    RECOVEREE_ID: i,
    TOTAL_CHILDREN: TOTAL_CHILDREN,
    TOTAL_CHILDREN_CUSTOD: TOTAL_CHILDREN_CUSTOD,
    TOTAL_CHILDREN_NONCUSTOD: TOTAL_CHILDREN_INCUSTODY,
    MINOR_CHILDREN: random.number(TOTAL_CHILDREN),
    WELFARE_SERVICES: faker.random.boolean(),
    USERNAME_ADD: faker.internet.userName(),
    USERNAME_UPD: faker.internet.userName()
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['DATE_ADD', 'RECOVEREE_FAMILY', 'RECOVEREE_ID'],
  compoundIndexes: [],
  table: 'TBL_REC_FAMILY'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
