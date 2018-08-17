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
    ABUSED: random.date(),
    ABUSED_TEXT: faker.lorem.words(),
    ANXIETY: random.date(),
    ANXIETY_TEXT: faker.lorem.words(),
    DATE: random.date(),
    DEPRESSION: random.date(),
    DEPRESSION_TEXT: faker.lorem.words(),
    EATING: random.date(),
    EATING_TEXT: faker.lorem.words(),
    HALLUCINATIONS: random.date(),
    HALLUCINATIONS_TEXT: faker.lorem.words(),
    HARMING: random.date(),
    HARMING_TEXT: faker.lorem.words(),
    HIT: random.date(),
    HIT_TEXT: faker.lorem.words(),
    MEDICATION: random.date(),
    MEDICATION_TEXT: faker.lorem.words(),
    OTHER: faker.lorem.words(),
    PENSION: random.date(),
    RECOVEREE_ID: i,
    REMEMBERING: random.date(),
    REMEMBERING_TEXT: faker.lorem.words(),
    SAFE: random.date(),
    SAFE_TEXT: faker.lorem.words(),
    SELF_HARM: random.date(),
    SELF_HARM_TEXT: faker.lorem.words(),
    SUICIDE: random.date(),
    SUICIDE_ATTEMPT: random.date(),
    SUICIDE_ATTEMPT_TEXT: faker.lorem.words(),
    SUICIDE_PLAN: random.date(),
    SUICIDE_PLAN_TEXT: faker.lorem.words(),
    SUICIDE_TEXT: faker.lorem.words(),
    TRAUMA: random.date(),
    TREATED_NUM: 1,
    UNSAFE: random.date(),
    UNSAFE_TEXT: faker.lorem.words(),
    VIOLENT: random.date(),
    VIOLENT_TEXT: faker.lorem.words(),
    MENTAL_HEALTH: faker.random.boolean(),
    MENTAL_HEALTH_SERVICES: faker.random.boolean(),
    MENTAL_HEALTH_DIAGNOSIS: faker.random.boolean(),
    WILL_SERVICES_HELP: faker.random.boolean()
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

