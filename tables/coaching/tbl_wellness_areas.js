const coaching = require('./coaching')

// Seed data.
const seeder = []

// create seed data.
coaching.tbl_wellness_areas.types.forEach((type, i) => {

  seeder.push({
    "DROPDOWN_DISPLAY": `${i + 1}. ${type}`,
    "ID": i + 1,
    "WELLNESS_AREA": type,
    "WELLNESS_AREA_NBR": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID', 'WELLNESS_AREA_NBR'],
  "compoundIndexes": [],
  "table": "TBL_WELLNESS_AREAS"
}
