const tables = require('../../configuration/tables-config')
const random = require('../../helpers/random')
const faker = require('faker')

// Seed data.
const seeder = []

// Question: Not sure if the logic is correct for generting aggregates.
// #1 Only create survey scores for current recoverees.
for (let i = 1; i <= tables.tbl_recoverees.total; i++) {

  // #2 Loop through each domain available.
  tables.tbl_domain_information.types.forEach((domain) => {

    let randomDate = random.date()

    // has every survey filled out.
    tables.tbl_survey_names.types.forEach((survey) => {

      seeder.push({
        "AGE_AT_MAX_DATE": random.number(100),
        "AGE_TODAY": random.number(100),
        "DOMAIN": domain.DOMAIN,
        "DOMAIN_FACETS_A": null,
        "DOMAIN_FACETS_B": null,
        "DOMAIN_NAME": domain.DOMAIN_NAME,
        "FACETS": null,
        "FIRST_SCORE": random.number(100),
        "GENDER": random.number(tables.tbl_gender.types.length),
        "LAST_SCORE": random.number(100),
        "MAX_DATE": random.date(),
        "RCC": "Center 1",
        "RECOVEREE_BDATE": randomDate,
        "RECOVEREE_ID": i,
        "STATUS": faker.lorem.sentences(2),
        "SURVEY": 3,
        "SURVEY_NAME": survey.SURVEY_NAME,
        "TOTAL_PEOPLE": 2 // Question: how are total people determined?
      })

    })
  })

}



module.exports = {
  "seeder": seeder,
  "indexes": ['DOMAIN', 'SURVEY'],
  "compoundIndexes": [],
  "table": "TBL_AGGREGATES"
}