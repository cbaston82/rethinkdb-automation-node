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
    },
    {
      "DOMAIN": 5,
      "DOMAIN_SCORE": 22,
      "RECOVEREE_ID": 2,
      "SCOREA": null,
      "SCOREB": 88,
      "SURVEY": 4,
      "SURVEY_DATE": "Fri Nov 08 2013 08:00:00 GMT+00:00",
      "id": "03a4b664-4b0a-40ad-8d7c-12c14156628f"
    },
    {
      "DOMAIN": 6,
      "DOMAIN_SCORE": 4,
      "RECOVEREE_ID": 3,
      "SCOREA": null,
      "SCOREB": 80,
      "SURVEY": 3,
      "SURVEY_DATE": "Mon Nov 18 2013 08:00:00 GMT+00:00",
      "id": "175ad475-f3f9-46d3-92de-23e00f891ca8"
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
