module.exports = {
  "seeder" : [
    {
      "DOMAIN": 8,
      "DOMAIN_SCORE": 21,
      "RECOVEREE_ID": 2,
      "SCOREA": null,
      "SCOREB": 84,
      "SURVEY": 4,
      "SURVEY_DATE": "Wed Nov 05 2014 08:00:00 GMT+00:00",
      "id": "0672be7f-3e7a-4aaa-842e-779e82a8ca51"
    }
  ],
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
