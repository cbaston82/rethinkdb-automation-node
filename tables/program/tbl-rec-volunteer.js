module.exports = {
  "seeder" : [],
  "indexes" : ['RECOVEREE_ID', 'VOL_DATE', 'VOL_LOCATION'],
  "compoundIndexes" : [
    {
      "name" : "VOL_info",
      "indexes": ['VOL_DATE', 'VOL_LOCATION']
    }
  ],
  "table" : "TBL_REC_VOLUNTEER"
}
