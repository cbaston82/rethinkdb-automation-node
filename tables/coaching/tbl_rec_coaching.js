module.exports = {
  "seeder" : [
    {
      "ACTION_PLAN_RECOVEREE":  "",
      "ACTION_PLAN_STAFF":  "",
      "BILLABLE": 0,
      "CHECK_IN":  "",
      "COACHED_BY": 18,
      "COACHING_DATE": "Wed Jan 03 2018 08:00:00 GMT+00:00",
      "COACHING_LOCATION": 2,
      "COACHING_MINUTES": 0,
      "COACHING_NOTES":  "",
      "COACHING_SESSION_TYPE": 1,
      "COMMUNITY_LOCATION":  "",
      "CONNECTING":  "",
      "CoachingRecID": 32,
      "DATE_ADD": "Fri Dec 15 2017 08:00:00 GMT+00:00",
      "DATE_UPD": "Fri Dec 15 2017 08:00:00 GMT+00:00",
      "DISCUSSION_ITEMS":  "",
      "DOMAIN_GOAL":  "",
      "END_TIME":  "",
      "GOALS":  "",
      "NEEDS_AND_CONCERNS":  "",
      "NEXT_MTG_DATE":  "",
      "NEXT_MTG_TIME":  "",
      "OTHER_DISCUSSION_ITEM":  "",
      "RECOVEREE_ID": 1,
      "REC_COACHING_ACTIVITY":  "",
      "RNUM": 14,
      "SELF_CARE":  "",
      "SERVICE_LOCATION": 5,
      "START_TIME":  "",
      "TBD": 0,
      "USERNAME_ADD":  "",
      "USERNAME_UPD":  "",
    }
  ],
  "indexes" : ['COACHED_BY', 'COACHING_DATE', 'COACHING_LOCATION', 'RECOVEREE_ID', 'RNUM'],
  "compoundIndexes" : [
    {
      "name" : "rec_coaching_info",
      "indexes" : [
        "RECOVEREE_ID",
        "RNUM"
      ]
    }
  ],
  "table" : "TBL_REC_COACHING"
}
