const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_clean_time_ranges.types.forEach((type, i) => {
  seeder.push({
    "DESC": type.DESC,
    "HIGH_NBR_OFDAYS": type.HIGH_NBR_OFDAYS,
    "ID": i + 1,
    "LOW_NBR_OFDAYS": type.LOW_NBR_OFDAYS
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_CLEAN_TIME_RANGES"
}