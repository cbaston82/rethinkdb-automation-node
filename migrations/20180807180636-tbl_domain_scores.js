const upDown = require('../helpers/updown')
const random = require('../helpers/random')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').surveysConfig

// Get any data needed for use in seeder.
const surveys = require('../data/surveys.json')
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// #1 Only create survey scores for current recoverees.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  // #2 Loop through each domain available.
  surveys.tbl_domain_information.types.forEach((domain) => {

    let randomDate = random.date()

    // has every survey filled out.
    surveys.tbl_survey_names.types.forEach((survey) => {

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

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['DOMAIN', 'RECOVEREE_ID', 'SURVEY'],
  "compoundIndexes": [{
    "name": "dom_srv_date",
    "indexes": ['DOMAIN', 'SURVEY', 'SURVEY_DATE']
  },
    {
      "name": "srv_date",
      "indexes": ['SURVEY', 'SURVEY_DATE']
    }
  ],
  "table": "TBL_DOMAIN_SCORES"
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
