const migrate = require('../migrate-table')
const billing = require('../tables/billing/billing')

// Seed data.
const seeder = []

// create seed data.
billing.tbl_billto.types.forEach((type, i) => {
  seeder.push({
    "BILLTO_NAME": type,
    "ID": i + 1
  })
})

const data = {
  "seeder": seeder,
  "indexes": ['ID'],
  "compoundIndexes": [],
  "table": 'TBL_BILLTO'
}

module.exports.up = function (r, connection) {
  migrate.up(r, connection, data)
};

module.exports.down = function (r, connection) {
  migrate.down(r, connection, data)
};
