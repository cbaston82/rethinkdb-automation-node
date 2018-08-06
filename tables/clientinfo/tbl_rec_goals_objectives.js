const random = require('../../helpers/random/index')
const faker = require('faker')
const clientinfo = require('../clientinfo')

// Seed data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "DATE_ADD": random.date(),
    "DATE_OBJ_ANTICIPATED": "",
    "DATE_OBJ_CANCELLED": "",
    "DATE_OBJ_MET": "",
    "DATE_OBJ_SET": random.date(),
    "DATE_UPD": random.date(),
    "FK_GOAL_ID": i,
    "OBJECTIVE": faker.lorem.sentence(),
    "OBJECTIVE_ID": i,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName()
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['FK_GOAL_ID', 'ID', 'OBJECTIVE_ID'],
  "compoundIndexes": [],
  "table": "TBL_REC_GOALS_OBJECTIVES"
}
