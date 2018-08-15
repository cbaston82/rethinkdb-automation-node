const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    DATE_ADD: random.date(),
    DATE_OBJ_ANTICIPATED: random.date(),
    DATE_OBJ_CANCELLED: random.date(),
    DATE_OBJ_MET: random.date(),
    DATE_OBJ_SET: random.date(),
    DATE_UPD: random.date(),
    FK_GOAL_ID: i,
    OBJECTIVE: faker.lorem.sentence(),
    OBJECTIVE_ID: i,
    USERNAME_ADD: faker.internet.userName(),
    USERNAME_UPD: faker.internet.userName()
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['FK_GOAL_ID', 'ID', 'OBJECTIVE_ID'],
  compoundIndexes: [],
  table: 'TBL_REC_GOALS_OBJECTIVES'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

