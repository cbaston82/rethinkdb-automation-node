const random = require('../../helpers/random')
const tables = require('../../configuration/tables-config')


// Seed data.
const seeder = []

// #1 Only create survey scores for current recoverees.
for(let i = 1; i <= tables.tbl_recoverees.total; i++){

  // #2 Loop through each domain available.
  tables.tbl_domain_information.types.forEach((domain) => {

    let randomDate = random.date()

    // has every survey filled out.
    tables.tbl_survey_names.types.forEach((survey) => {

      seeder.push({
        "DOMAIN": domain.DOMAIN,
        "DOMAIN_SCORE": random.number(30),
        "RECOVEREE_ID": i,
        "SCOREA": random.number(50),
        "SCOREB": random.number(100),
        "SURVEY": survey.ID,
        "SURVEY_DATE": randomDate
      })

    })

  })

}

module.exports = {
  "seeder" : seeder,
  "indexes": ['DOMAIN', 'RECOVEREE_ID', 'SURVEY'],
  "compoundIndexes": [
    {
      "name" : "dom_srv_date",
      "indexes": ['DOMAIN', 'SURVEY', 'SURVEY_DATE']
    },
    {
      "name" : "srv_date",
      "indexes": ['SURVEY', 'SURVEY_DATE']
    }
  ],
  "table": "TBL_DOMAIN_SCORES"
}
