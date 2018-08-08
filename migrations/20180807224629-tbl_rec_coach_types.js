const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').coachingConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')

// Initial state of seeder data.
const seeder = []

// Question: is this being used anywhere? did not find it on the front end.
// create seed data.
for (let i = 1; i <= clientinfo.tbl_recoverees.total; i++) {

  seeder.push({
    "RecovereeAttributeID": i,
    "fk_AttributeID": i, // Question: should this be incremental?.
    "fk_RecovereeID": i
  })
}

// Data to be seeded to db.
const data = {
  "seeder": seeder,
  "indexes": ['RecovereeAttributeID', 'fk_RecovereeID'],
  "compoundIndexes": [],
  "table": "TBL_REC_COACH_TYPES"
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
