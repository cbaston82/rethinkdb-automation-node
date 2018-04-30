module.exports = {
  "seeder" : [
    {
      "DESC":  "02. >6 and <= 12 Months",
      "HIGH_NBR_OFDAYS": 365,
      "ID": 4,
      "LOW_NBR_OFDAYS": 181
    },
    {
      "DESC":  "01. <= 6 Months",
      "HIGH_NBR_OFDAYS": 180,
      "ID": 3,
      "LOW_NBR_OFDAYS": 0
    },
    {
      "DESC":  "05. >3 and <= 5 Years",
      "HIGH_NBR_OFDAYS": 1825,
      "ID": 9,
      "LOW_NBR_OFDAYS": 1096
    },
    {
      "DESC":  "04. >2 and  <= 3 Years",
      "HIGH_NBR_OFDAYS": 1095,
      "ID": 8,
      "LOW_NBR_OFDAYS": 731
    },
    {
      "DESC":  "03. >12 and <= 24 Months",
      "HIGH_NBR_OFDAYS": 730,
      "ID": 6,
      "LOW_NBR_OFDAYS": 366
    },
    {
      "DESC":  "06. >5 Years",
      "HIGH_NBR_OFDAYS": 999999999,
      "ID": 10,
      "LOW_NBR_OFDAYS": 1826
    }
  ],
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_CLEAN_TIME_RANGES"
}
