const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')
const medical = require('../data/medical')

// Initial state of seeder data.
const seeder = []

// create seed data - total is set in tables-config.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    RECOVEREE_ID: i,
    ID: i,
    FIRST_USE_AGE: faker.random.number(),
    AGE_REGULARLY_USING: faker.random.number(),
    INJECTED_DRUGS: faker.random.boolean(),
    EXPERIENCED_BLACKOUTS: faker.random.boolean(),
    EVER_OVERDOSED: faker.random.boolean(),
    WITHDRAWLS_DTS_SEIZURES: faker.random.boolean(),
    TOBACCO_NICOTINE: faker.random.boolean(),
    TOBACCO_NICOTINE_INFORMATION: faker.random.boolean(),
    SUBSTANCE_DISORDER_TREATMENT: faker.random.boolean(),
    SUBSTANCE_DISORDER_TREATMENT_DETOX: random.number(5),
    EVER_ABSTINENT: faker.random.boolean(),
    EVER_ABSTINENT_LONGEST_TIME: faker.random.words(),
    DRUGS_ACQUIRED: random.arrayOfNumbers(medical.tbl_drugs_acquired.types.length),
    ATTENDED_SUPPORT: faker.random.boolean(),
    ATTENDING_SUPPORT: faker.random.boolean()
  })
}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['ID'],
  compoundIndexes: [],
  table: 'TBL_REC_SUBSTANCE_HISTORY'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

