const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_domain_information.types.forEach((type, i) => {
  seeder.push({
    "DOMAIN": type.DOMAIN,
    "DOMAIN_FACETS_A": type.DOMAIN_FACETS_A,
    "DOMAIN_FACETS_B": type.DOMAIN_FACETS_B,
    "DOMAIN_NAME": type.DOMAIN_NAME,
    "SURVEY": type.SURVEY
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": [],
  "compoundIndexes": [],
  "table": "TBL_DOMAIN_INFORMATION"
}