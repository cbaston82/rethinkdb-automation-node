const system = require('../system')

// Seed data.
const seeder = []

// create seed data.
system.tblrole.types.forEach((type, i) => {
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
