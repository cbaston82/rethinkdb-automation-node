const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1
let recoverycheckupid = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.tbl_rec_recovery_checkup_services.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1
  if(recoverycheckupid > tables.tbl_rec_recovery_checkup.total) recoverycheckupid = 1

  seeder.push( {
    "Itemserviceid": i,
    "fk_recoverycheckupid": recoverycheckupid,
    "fk_serviceid": random.number(tables.tbl_checkup_services.types.length)
  })
  recId++
  recoverycheckupid++
}

module.exports = {
  "seeder": seeder,
  "indexes": ['Itemserviceid', 'fk_recoverycheckupid', 'fk_serviceid'],
  "compoundIndexes": [],
  "table": "tbl_rec_recovery_checkup_services"
}
