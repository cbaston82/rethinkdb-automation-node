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
    "DATE_ADD": random.date(),
    "DATE_ADDED": random.date(),
    "DATE_UPD": random.date(),
    "DRUG_COURT": random.number(),
    "EFF_DATE": random.date(),
    "END_DATE": random.date(),
    "EVER_ARRESTED": random.number(),
    "EVER_INCARCERATED": random.number(),
    "EVER_ON_PAROLE": random.number(),
    "EVER_ON_PROBATION": random.number(),
    "ON_PAROLE_NOW": random.number(),
    "ON_PROBATION_NOW": random.number(),
    "NONE_PREVIOUSLY": random.number(),
    "JAIL_PREVIOUSLY": random.number(),
    "PSYCHIATRIC_TREATMENT_PREVIOUSLY": random.number(),
    "ALCOHOL_TREATMENT_PREVIOUSLY": random.number(),
    "MEDICAL_TREATMENT_PREVIOUSLY": random.number(),
    "OTHER_PREVIOUSLY": faker.lorem.sentence(),
    "RECOVERY_ID": i,
    "USERNAME_ADD": faker.internet.userName(),
    "USERNAME_UPD": faker.internet.userName(),
    "PAROLE_TYPE": faker.lorem.word(),
    "CONVICTED": random.number(),
    "DRIVING_VIOLATION": random.number(),
    "DRIVING_INTOXICATED": random.number(),
    "PUBLIC_INTOXICATION": random.number(),
    "DISORDERLY_CONDUCT": random.number(),
    "VAGRANCY": random.number(),
    "CHARGES_PENDING": random.number(),
    "CHARGES_PENDING_EXPLANATION": faker.lorem.sentence(),
    "CRIMES_LIST": faker.lorem.sentence()
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['EFF_DATE', 'RECOVERY_ID'],
  "compoundIndexes": [],
  "table": 'TBL_REC_DOC_INFO'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}

