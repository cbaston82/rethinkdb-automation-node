module.exports = {
  "seeder" : [
    {
      "DATE_ADD": "Mon Jan 15 2018 08:00:00 GMT+00:00",
      "DATE_UPD": "Mon Jan 15 2018 08:00:00 GMT+00:00",
      "RECOVEREE_ID": 2 ,
      "TERecID": 1 ,
      "TE_DATE": "Thu Apr 06 2017 08:00:00 GMT+00:00",
      "TE_LOCATION": 2 ,
      "USERNAME_ADD":  "jrbuser",
      "USERNAME_UPD":  "jrbuser",
      "training_event":  ""
    },
    {
      "DATE_ADD": "Mon Jan 15 2018 08:00:00 GMT+00:00",
        "DATE_UPD": "Mon Jan 15 2018 08:00:00 GMT+00:00",
        "RECOVEREE_ID": 2 ,
        "TERecID": 11 ,
        "TE_DATE": "Mon Jan 15 2018 08:00:00 GMT+00:00",
        "TE_LOCATION": 2 ,
        "USERNAME_ADD":  "jrbuser",
        "USERNAME_UPD":  "jrbuser",
        "training_event":  ""
      }
  ],
  "indexes" : ['RECOVEREE_ID', 'TE_DATE', 'TE_LOCATION', 'TERecID'],
  "compoundIndexes" : [
    {
      "name" : "TE_info",
      "indexes": ['TERecID', 'DATE_ADD']
    }
  ],
  "table" : "TBL_REC_TRAININGS_EVENTS"
}
