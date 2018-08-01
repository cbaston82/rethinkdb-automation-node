const random = require('../../helpers/random/index')
const clientinfo = require('../clientinfo/clientinfo')
const contacts = require('./contacts')

// Seed data.
const seeder = []

// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "Itemserviceid": i,
    "fk_recoverycheckupid": i,
    "fk_serviceid": random.number(contacts.tbl_checkup_services.types.length)
  })
}

module.exports = {
  "seeder": seeder,
  "indexes": ['Itemserviceid', 'fk_recoverycheckupid', 'fk_serviceid'],
  "compoundIndexes": [],
  "table": "tbl_rec_recovery_checkup_services"
}
