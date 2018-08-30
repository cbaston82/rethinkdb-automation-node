const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder. 
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    RECOVEREE_ID: i,
    ID: i,
    TIMES_HOSPITALIZED: random.number(5),
    LAST_HOSPITALIZATION: random.date(),
    MEDICAL_PROBLEMS: faker.random.boolean(),
    MEDICAL_PROBLEMS_EXPLANATION: faker.lorem.words(),
    PRESCRIBED_MEDICATION: faker.random.boolean(),
    PRESCRIBED_MEDICATION_LIST: faker.lorem.words(),
    PENSION: faker.random.boolean(),
    PENSION_EXPLANATION: faker.lorem.words(),
    NUTRITIONAL_LIFESTYLE: faker.random.word(),
    PHYSICAL_LIFESTYLE: faker.random.word(),
    CURRENTLY_UNDER_DOCTORS_CARE: faker.random.boolean(),
    DISABILITY_CONDITION: faker.random.boolean(),
    DISABILITY_CONDITION_EXPLANATION: faker.lorem.words(),
    PHYSICAL_DISABILITY: faker.random.boolean(),
    PHYSICAL_DISABILITY_EXPLANATION: faker.lorem.words(),
    PHYSICAL_DISABILITY_SERVICES: faker.random.boolean(),
    LONG_TERM_PHYSICAL_DISABILITY: faker.random.boolean(),
    DEVELOPMENTAL_DISABILITY: faker.random.boolean(),
    DEVELOPMENTAL_DISABILITY_SERVICES: faker.random.boolean(),
    LONG_TERM_DEVELOPMENTAL_DISABILITY: faker.random.boolean(),
    HIV_AIDS: faker.random.boolean(),
    HIV_AIDS_EXPLANATION: faker.lorem.words(),
    HIV_AIDS_SERVICES: faker.random.boolean(),
    EXPECTED_TO_IMPAIR_INDEPENDENCE: faker.random.boolean()
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID'],
  compoundIndexes: [],
  table: 'TBL_REC_HEALTH'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

