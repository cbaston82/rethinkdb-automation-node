const contacts = require('./contacts')

// Seed data.
const seeder = []

// create seed data.
contacts.tbl_checkup_services.types.forEach((type, i) => {
  seeder.push({
    "CHECKUP_SERVICE": type,
    "ID": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": "TBL_CHECKUP_SERVICES"
}
