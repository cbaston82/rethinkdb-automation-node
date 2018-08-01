const contacts= require('./contacts')

// Seed data.
const seeder = []

// create seed data.
contacts.tbl_cell_provider.types.forEach((type, i) => {
  seeder.push({
    "CELLULAR_PROVIDER": type.CELLULAR_PROVIDER,
    "EMAIL_TEXT_PREFIX": null,
    "EMAIL_TEXT_SUFFIX": type.EMAIL_TEXT_SUFFIX,
    "ID": i + 1
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['ID', 'CELLULAR_PROVIDER'],
  "compoundIndexes": [],
  "table": "TBL_CELL_PROVIDER"
}
