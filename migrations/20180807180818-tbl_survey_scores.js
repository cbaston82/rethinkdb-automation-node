const upDown = require('../helpers/updown')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').surveysConfig

// Get any data needed for use in seeder.
const surveys = require('../data/surveys.json')
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// #1 Only create survey scores for current recoverees.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  // #2 Loop through each survey available.
  surveys.tbl_survey_names.types.forEach((survey) => {

    let randomDate = random.date()

    // #3 find each survey _question and. this makes sure each recovery
    // has every survey filled out.
    surveys.tbl_survey_questions.types.forEach((question) => {

      if (question.SURVEY === survey.ID) {

        let randomNumber = random.number(5)
        seeder.push({
          "ADJ_RESPONSE": randomNumber,
          "QUESTION_NBR": question.QUESTION,
          "RECOVEREE_ID": i,
          "RESPONSE": randomNumber,
          "SURVEY": survey.ID,
          "SURVEY_DATE": randomDate
        })

      }

    })

  })

}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID', 'SURVEY', 'SURVEY_DATE'],
  "compoundIndexes": [{
    "name": "rec_srv",
    "indexes": ['RECOVEREE_ID', 'SURVEY']
  },
    {
      "name": "rec_srv_qst",
      "indexes": ['RECOVEREE_ID', 'SURVEY', 'QUESTION_NBR']
    }
  ],
  "table": "TBL_SURVEY_SCORES"
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
