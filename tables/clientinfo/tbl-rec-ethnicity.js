module.exports = {
  "seeder" : [
    {
      "RecovereeAttributeID": 4,
      "fk_AttributeID": 1,
      "fk_RecovereeID": 2
    },
    {
      "RecovereeAttributeID": 4,
      "fk_AttributeID": 2,
      "fk_RecovereeID": 3
    },
    {
      "RecovereeAttributeID": 4,
      "fk_AttributeID": 3,
      "fk_RecovereeID": 4
    },
    {
      "RecovereeAttributeID": 4,
      "fk_AttributeID": 2,
      "fk_RecovereeID": 1
    },
    {
      "RecovereeAttributeID": 4,
      "fk_AttributeID": 1,
      "fk_RecovereeID": 5
    }
  ],
  "indexes" : ['fk_AttributeID', 'fk_RecovereeID'],
  "compoundIndexes" : [],
  "table" : "TBL_REC_ETHNICITY"
}
