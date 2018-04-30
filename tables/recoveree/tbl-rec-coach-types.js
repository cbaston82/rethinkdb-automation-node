module.exports = {
  "seeder" : [
    {
      "RecovereeAttributeID": 1,
      "fk_AttributeID": 6,
      "fk_RecovereeID": 1
    },
    {
      "RecovereeAttributeID": 3,
      "fk_AttributeID": 4,
      "fk_RecovereeID": 1
    },
    {
      "RecovereeAttributeID": 2,
      "fk_AttributeID": 9,
      "fk_RecovereeID": 1
    },
    {
      "RecovereeAttributeID": 4,
      "fk_AttributeID": 5,
      "fk_RecovereeID": 1
    }
  ],
  "indexes" : ['RecovereeAttributeID', 'fk_RecovereeID'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_COACH_TYPES"
}
