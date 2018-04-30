module.exports = {
  "seeder" : [
    {
      "ADJ_RESPONSE": 3,
      "QUESTION_NBR": 16,
      "RECOVEREE_ID": 1,
      "RESPONSE": 3,
      "SURVEY": 3,
      "SURVEY_DATE": "Mon Jan 06 2014 08:00:00 GMT+00:00",
    },
    {
      "ADJ_RESPONSE": 4,
      "QUESTION_NBR": 3,
      "RECOVEREE_ID": 1,
      "RESPONSE": 2,
      "SURVEY": 3,
      "SURVEY_DATE": "Mon Dec 01 2014 08:00:00 GMT+00:00",
    },
    {
      "ADJ_RESPONSE": 5,
      "QUESTION_NBR": 27,
      "RECOVEREE_ID": 2,
      "RESPONSE": 5,
      "SURVEY": 4,
      "SURVEY_DATE": "Tue Feb 18 2014 08:00:00 GMT+00:00",
    }
  ],
  "indexes" : ['RECOVEREE_ID', 'SURVEY', 'SURVEY_DATE'],
  "compoundIndexes" : [
    {
      "name": "rec_srv",
      "indexes": ['RECOVEREE_ID', 'SURVEY']
    },
    {
      "name": "rec_srv_qst",
      "indexes": ['RECOVEREE_ID', 'SURVEY', 'QUESTION_NBR']
    }
  ],
  "table" : "TBL_SURVEY_SCORES"
}
