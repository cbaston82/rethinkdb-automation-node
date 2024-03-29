const upDown = require('../helpers/updown')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').surveysConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')
const demographics = require('../data/demographics.json')
const surveys = require('../data/surveys.json')
const programs = require('../data/programs')

// Initial state of seeder data.
const seeder = []

// Question: Not sure if the logic is correct for generting aggregates.
// #1 Only create survey scores for current recoverees.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  // #2 Loop through each domain available.
  surveys.tbl_domain_information.types.forEach((domain) => {

    let randomDate = random.date()

    // has every survey filled out.
    surveys.tbl_survey_names.types.forEach((survey) => {

      seeder.push({
        AGE_AT_MAX_DATE: random.number(100),
        AGE_TODAY: random.number(100),
        DOMAIN: domain.DOMAIN,
        DOMAIN_FACETS_A: null,
        DOMAIN_FACETS_B: null,
        DOMAIN_NAME: domain.DOMAIN_NAME,
        FACETS: null,
        FIRST_SCORE: random.number(100),
        GENDER: random.number(demographics.tbl_gender.types.length),
        LAST_SCORE: random.number(100),
        MAX_DATE: random.date(),
        RCC: random.number(programs.tbl_rcc.types.length),
        RECOVEREE_BDATE: randomDate,
        RECOVEREE_ID: i,
        STATUS: faker.lorem.sentences(2),
        SURVEY: 3,
        SURVEY_NAME: survey.SURVEY_NAME,
        TOTAL_PEOPLE: 2 // Question: how are total people determined?
      })

    })
  })

}

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: ['DOMAIN', 'SURVEY'],
  compoundIndexes: [],
  table: 'TBL_AGGREGATES'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
