const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').surveysConfig

// This is just an empty table. nothing to do here.
const data = {
  "seeder": [],
  "indexes": ['RECOVEREE_ID', 'SURVEY'],
  "compoundIndexes": [],
  "table": "TBL_TEMP_SURVEY_SCORES"
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
