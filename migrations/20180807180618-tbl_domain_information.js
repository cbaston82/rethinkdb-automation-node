const upDown = require('../helpers/updown')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').surveysConfig

// Get any data needed for use in seeder.
const surveys = require('../data/surveys.json')

// Initial state of seeder data.
const seeder = []

// create seed data.
surveys.tbl_domain_information.types.forEach((type, i) => {
  seeder.push({
    DOMAIN: type.DOMAIN,
    DOMAIN_FACETS_A: type.DOMAIN_FACETS_A,
    DOMAIN_FACETS_B: type.DOMAIN_FACETS_B,
    DOMAIN_NAME: type.DOMAIN_NAME,
    SURVEY: type.SURVEY
  })
})

// Data to be seeded to db.
const data = {
  seeder: seeder,
  indexes: [],
  compoundIndexes: [],
  table: 'TBL_DOMAIN_INFORMATION'
}

module.exports.up = async function (r, connection) {
  await upDown(r, connection, data, config, 'up')
}

module.exports.down = async function (r, connection) {
  await upDown(r, connection, data, config, 'down')
}
