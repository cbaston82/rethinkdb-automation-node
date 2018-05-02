module.exports = {
  "seeder" : [
    {
      "ABREV_NAME": null,
      "FREQUENCY": 30,
      "ID": 2,
      "MAX_SCORE": 195,
      "SURVEY_NAME":  "Wellness Self-Assessment Survey",
    },
    {
      "ABREV_NAME":  "SCI",
      "FREQUENCY": 30,
      "ID": 11,
      "MAX_SCORE": null,
      "SURVEY_NAME":  "Sense of Community",
    },
    {
      "ABREV_NAME":  "QOL",
      "FREQUENCY": 30,
      "ID": 3,
      "MAX_SCORE": null,
      "SURVEY_NAME":  "Quality of Life Survey",
    },
    {
      "ABREV_NAME": null,
      "FREQUENCY": 30,
      "ID": 1,
      "MAX_SCORE": 175,
      "SURVEY_NAME":  "Recovery Capital Survey",
    },
    {
      "ABREV_NAME":  "ARC",
      "FREQUENCY": 30,
      "ID": 4,
      "MAX_SCORE": 250,
      "SURVEY_NAME":  "Assessment of Recovery Capital",
    }
  ],
  "indexes" : ['ID', 'SURVEY'],
   "compoundIndexes" : [],
  "table" : "TBL_SURVEY_NAMES"
}
