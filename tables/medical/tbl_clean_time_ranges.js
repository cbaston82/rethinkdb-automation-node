const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_clean_time_ranges.types.forEach((type, i) => {
  seeder.push({
    "DESC":  type.description,
    "HIGH_NBR_OFDAYS": type.high,
    "ID": i +1,
    "LOW_NBR_OFDAYS": type.low
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_CLEAN_TIME_RANGES"
}
