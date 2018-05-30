const tables = require('../../configuration/tables-config')
const faker = require('faker')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_attributes_user.types.forEach((type, i) => {
  seeder.push({
    "AttributeID": i + 1,
    "AttributeName": type,
    "UserName": faker.internet.userName()
  })
})

module.exports = {
  "seeder": seeder,
  "indexes": ['AttributeID', 'ReportSelection'],
  "compoundIndexes": [],
  "table": "tbl_Attributes_user"
}