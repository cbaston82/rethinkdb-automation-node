const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').billingConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo')

// Initial state of seeder data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    ABUSED: faker.random.boolean(),
    ABUSED_TEXT: faker.lorem.words(),
    ANXIETY: faker.random.boolean(),
    ANXIETY_TEXT: faker.lorem.words(),
    DATE: random.date(),
    DEPRESSION: faker.random.boolean(),
    DEPRESSION_TEXT: faker.lorem.words(),
    EATING: faker.random.boolean(),
    EATING_TEXT: faker.lorem.words(),
    HALLUCINATIONS: faker.random.boolean(),
    HALLUCINATIONS_TEXT: faker.lorem.words(),
    HARMING: faker.random.boolean(),
    HARMING_TEXT: faker.lorem.words(),
    HIT: faker.random.boolean(),
    HIT_TEXT: faker.lorem.words(),
    MEDICATION: faker.random.boolean(),
    MEDICATION_TEXT: faker.lorem.words(),
    OTHER: faker.lorem.words(),
    PENSION: faker.random.boolean(),
    RECOVEREE_ID: i,
    REMEMBERING: faker.random.boolean(),
    REMEMBERING_TEXT: faker.lorem.words(),
    SAFE: faker.random.boolean(),
    SAFE_TEXT: faker.lorem.words(),
    SELF_HARM: faker.random.boolean(),
    SELF_HARM_TEXT: faker.lorem.words(),
    SUICIDE: faker.random.boolean(),
    SUICIDE_ATTEMPT: faker.random.boolean(),
    SUICIDE_ATTEMPT_TEXT: faker.lorem.words(),
    SUICIDE_PLAN: faker.random.boolean(),
    SUICIDE_PLAN_TEXT: faker.lorem.words(),
    SUICIDE_TEXT: faker.lorem.words(),
    TRAUMA: faker.random.boolean(),
    TREATED_NUM: 1,
    UNSAFE: faker.random.boolean(),
    UNSAFE_TEXT: faker.lorem.words(),
    VIOLENT: faker.random.boolean(),
    VIOLENT_TEXT: faker.lorem.words(),
    MENTAL_HEALTH: faker.random.boolean(),
    MENTAL_HEALTH_TEXT: faker.lorem.words(),
    MENTAL_HEALTH_SERVICES: faker.random.boolean(),
    MENTAL_HEALTH_SERVICES_TEXT: faker.lorem.words(),
    MENTAL_HEALTH_DIAGNOSIS: faker.random.boolean(),
    MENTAL_HEALTH_DIAGNOSIS_TEXT: faker.lorem.words(),
    WILL_SERVICES_HELP: faker.random.boolean(),
    WILL_SERVICES_HELP_TEXT: faker.lorem.words(),
  })
}

// Data to be seeded to db.
const data = module.exports = {
  seeder: seeder,
  indexes: ['DATE', 'ID'],
  compoundIndexes: [],
  table: 'TBL_REC_PSYCH_HISTORY'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

