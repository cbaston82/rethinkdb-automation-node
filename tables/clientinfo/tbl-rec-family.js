module.exports = {
  "seeder" : [
    {
      "DATE_ADD": "Fri Dec 01 2017 08:00:00 GMT+00:00" ,
      "DATE_UPD": "Fri Dec 01 2017 08:00:00 GMT+00:00" ,
      "EFF_DATE": "Thu Dec 21 2017 08:00:00 GMT+00:00" ,
      "END_DATE": "Sun Dec 24 2017 08:00:00 GMT+00:00" ,
      "RECOVEREE_FAMILY": 1 ,
      "RECOVEREE_ID": 10 ,
      "TOTAL_CHILDREN": 5 ,
      "TOTAL_CHILDREN_CUSTOD": 4 ,
      "TOTAL_CHILDREN_NONCUSTOD": 15 ,
      "USERNAME_ADD":  "jrbuser" ,
      "USERNAME_UPD":  "jrbuser"
    },
    {
      "DATE_ADD": "Mon Oct 09 2017 00:00:00 GMT+00:00" ,
      "DATE_UPD": "Mon Oct 09 2017 00:00:00 GMT+00:00" ,
      "EFF_DATE": "Sat Sep 30 2017 00:00:00 GMT+00:00" ,
      "END_DATE": "Thu Oct 12 2017 00:00:00 GMT+00:00" ,
      "RECOVEREE_FAMILY": 1 ,
      "RECOVEREE_ID": 1 ,
      "TOTAL_CHILDREN": 4 ,
      "TOTAL_CHILDREN_CUSTOD": 2 ,
      "TOTAL_CHILDREN_NONCUSTOD": 2 ,
      "USERNAME_ADD":  "jrbuser" ,
      "USERNAME_UPD":  "jrbuser"
    }
  ],
  "indexes" : ['DATE_ADD', 'RECOVEREE_FAMILY', 'RECOVEREE_ID'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_FAMILY"
}
