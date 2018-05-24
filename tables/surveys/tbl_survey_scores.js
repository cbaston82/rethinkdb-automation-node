const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
const questions = [2,3,4]

// #1 Only create survey scores for current recoverees.
for(let i = 1; i <= tables.tbl_recoverees.total; i++){

  // #2 Loop through each survey available.
 tables.tbl_survey_names.types.forEach((survey) => {

   let randomDate = random.date()

   // #3 find each survey _question and. this makes sure each recovery
   // has every survey filled out.
   tables.tbl_survey_questions.types.forEach((question) => {

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

module.exports = {
  "seeder": seeder,
  "indexes": ['RECOVEREE_ID', 'SURVEY', 'SURVEY_DATE'],
  "compoundIndexes": [
    {
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
