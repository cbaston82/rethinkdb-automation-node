const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tblrole.types.forEach((type, i) => {
  seeder.push({
    "RoleID": i + 1,
    "Rolename": type
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['RoleID'],
  "compoundIndexes": [],
  "table": "tblRole"
}
