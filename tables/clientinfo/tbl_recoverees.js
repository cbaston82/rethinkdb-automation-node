const faker = require('faker')
const {RandomSSN} = require('ssn')
const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')

// Seed data
const seeder = []
const profileImages = ['businessman.jpg', 'businesswoman.jpg']

// create seed data - total is set in tables-config
// Todo: Continue to implement fake data where ever necessary
for(let i = 0; i < 5; i++){
  let randomSSN = new RandomSSN();
  let id = '0ed70a4b-682d-446d-bf88-7640359b07'
  id = (i.toString().length < 2) ? id += '0'+ i : id += i

  seeder.push({
    "ALTERNATE_ID":  "",
    "DATE_ADD": random.isoRandomDateFormatTimeCreate(),
    "DATE_UPD": random.isoRandomDateFormatTimeCreate() ,
    "FIRST_DRUG": Math.floor(Math.random() * 4) + 1,
    "FirstDrugUsed": Math.floor(Math.random() * 4) + 1,
    "PICTURE": profileImages[Math.floor(Math.random() * profileImages.length)],
    "RECOVEREE_ARC_DATE":  "",
    "RECOVEREE_ARC_SCORE": 0,
    "RECOVEREE_ATTACHMENTS":  "",
    "RECOVEREE_BDATE": random.isoRandomDateFormatTimeCreate(),
    "RECOVEREE_CAPITAL_DATE":  "",
    "RECOVEREE_CAPITAL_SCORE": 0,
    "RECOVEREE_CASE_CLOSED":  "",
    "RECOVEREE_CASE_OPENED":  "",
    "RECOVEREE_CERTIFICATION": [],
    "RECOVEREE_DATE_ADDED": random.isoRandomDateFormatTimeCreate(),
    "RECOVEREE_DATE_UPDATED": random.isoRandomDateFormatTimeCreate(),
    "RECOVEREE_EMAIL":  "",
    "RECOVEREE_GENDER": Math.floor(Math.random() * 4) + 1,
    "RECOVEREE_HOW_THEY_HEARD": Math.floor(Math.random() * 12) + 1,
    "RECOVEREE_ID": i + 1,
    "RECOVEREE_INACTIVE": false,
    "RECOVEREE_LANGUAGES": [],
    "RECOVEREE_LOCATION": 0,
    "RECOVEREE_MARITAL_STATUS": Math.floor(Math.random() * 6) + 1,
    "RECOVEREE_NAME":  faker.name.firstName() + ' ' + faker.name.lastName(),
    "RECOVEREE_NOTES":  faker.lorem.sentences(2),
    "RECOVEREE_PREFERRED_LANGUAGE": Math.floor(Math.random() * 4) + 1,
    "RECOVEREE_QOL_DATE":  "",
    "RECOVEREE_RACE": Math.floor(Math.random() * 9) + 1,
    "RECOVEREE_REFERRED_BY_DATE":  "",
    "RECOVEREE_REFERRED_BY_source": Math.floor(Math.random() * 12) + 1,
    "RECOVEREE_SCI_DATE":  "",
    "RECOVEREE_SCI_SCORE": 0,
    "RECOVEREE_SEX_ORIENT":  "",
    "RECOVEREE_SSN":  randomSSN.value().toFormattedString(),
    "RECOVEREE_TYPE": 0,
    "RECOVEREE_WELLNESS_SCORE": 0,
    "RECOVEREE_WELLNESS_SELF_ASSESS_DATE":  "",
    "SERVICES_INITIATED":  "",
    "TOTAL_CHILDREN": Math.floor(Math.random() * 5) + 1,
    "TREATMENT_DISCHARGE":  "",
    "TYPE_OF_TRANS": 0,
    "TestDelete":  "",
    "USERNAME_ADD":  "jrbuser",
    "USERNAME_UPD":  "jrbuser",
    "archived": false,
    "id": id
  })
}

module.exports = {
  "seeder" : seeder,
  "indexes" : [
    'FIRST_DRUG',
    'FirstDrugUsed',
    'NEWVISITOR',
    'RECOVEREE_BOARD',
    'RECOVEREE_CERTIFICATION',
    'RECOVEREE_GENDER',
    'RECOVEREE_ID',
    'RECOVEREE_LOCATION',
    'RECOVEREE_MARITAL_STATUS',
    'RECOVEREE_NAME',
    'RECOVEREE_PREFERRED_LANGUAGE',
    'RECOVEREE_RACE',
    'RECOVEREE_REFERRED_BY_source',
    'RECOVEREE_SEX_ORIENT',
    'RECOVEREE_TYPE',
    'TYPE_OF_TRANS'

  ],
  "compoundIndexes" : [],
  "table" : "TBL_RECOVEREES"
}
