const faker = require('faker')

// Custom imports
const timeFormat = require('../../helpers/timeFormats/index')

// Create note part - to generate notes
const notes = [], number = 10, ID = 1

// Create notes
for(let i = 0; i < number; i++){
  notes.push({
    "ID": ID,
    "NOTE":  faker.random.words(10),
    "STAMP":  timeFormat.isoDateFormatTimeCreate()
  })
}

module.exports = {
  "seeder" : notes,
  "indexes" : ['ID', 'STAMP'],
  "compoundIndexes" : [],
  "table" : 'CLIENT_NOTES'
}
