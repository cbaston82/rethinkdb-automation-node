const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_attributes_user.types.forEach((type, i) => {
  seeder.push({
    "AttributeID": i + 1,
    "AttributeName": type,
    "ReportSelection": 0, // Question: what does this mean exactly
    "UserName": "faker.internet.userName())"
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['AttributeID', 'ReportSelection'],
  "compoundIndexes": [],
  "table": "tbl_Attributes_user"
}
