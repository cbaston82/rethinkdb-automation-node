const faker = require('faker')
const { RandomSSN } = require('ssn')
const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')

// Seed data
const seeder = []
const profileImages = ['businessman.jpg', 'businesswoman.jpg']

// create seed data - total is set in tables-config
for (let i = 0; i < tables.tbl_recoverees.total; i++) {
  let randomSSN = new RandomSSN()
  let id = tables.tbl_recoverees.id
  id = (i.toString().length < 2) ? id += '0' + i : id += i

  seeder.push({
    'ALTERNATE_ID': '',
    'DATE_ADD': random.date(),
    'DATE_UPD': random.date(),
    'FIRST_DRUG': random.number(tables.tbl_drugs.types.length),
    'FirstDrugUsed': random.number(tables.tbl_drugs.types.length),
    'PICTURE': profileImages[Math.floor(Math.random() * profileImages.length)],
    'RECOVEREE_ARC_DATE': '',
    'RECOVEREE_ARC_SCORE': 0,
    'RECOVEREE_ATTACHMENTS': '',
    'RECOVEREE_BDATE': random.date(),
    'RECOVEREE_CAPITAL_DATE': '',
    'RECOVEREE_CAPITAL_SCORE': 0,
    'RECOVEREE_CASE_CLOSED': '',
    'RECOVEREE_CASE_OPENED': '',
    'RECOVEREE_CERTIFICATION': [],
    'RECOVEREE_DATE_ADDED': random.date(),
    'RECOVEREE_DATE_UPDATED': random.date(),
    'RECOVEREE_EMAIL': faker.internet.email(),
    'RECOVEREE_GENDER': random.number(tables.tbl_gender.types.length),
    'RECOVEREE_HOW_THEY_HEARD': random.number(tables.tbl_how_they_heard.types.length),
    'RECOVEREE_ID': i + 1,
    'RECOVEREE_INACTIVE': false,
    'RECOVEREE_LANGUAGES': random.arrayOfNumbers(tables.tbl_language.types.length),
    'RECOVEREE_LOCATION': 0,
    'RECOVEREE_MARITAL_STATUS': random.number(tables.tbl_marital_status.types.length),
    'RECOVEREE_NAME': faker.name.firstName() + ' ' + faker.name.lastName(),
    'RECOVEREE_NOTES': faker.lorem.sentences(2),
    'RECOVEREE_PREFERRED_LANGUAGE': random.number(tables.tbl_language.types.length),
    'RECOVEREE_QOL_DATE': '',
    'RECOVEREE_RACE': random.number(tables.tbl_race.types.length),
    'RECOVEREE_REFERRED_BY_DATE': '',
    'RECOVEREE_REFERRED_BY_source': random.number(tables.tbl_referral_source.types.length),
    'RECOVEREE_SCI_DATE': '',
    'RECOVEREE_SCI_SCORE': 0,
    'RECOVEREE_SEX_ORIENT': '',
    'RECOVEREE_SSN': randomSSN.value().toFormattedString(),
    'RECOVEREE_TYPE': 0,
    'RECOVEREE_WELLNESS_SCORE': 0,
    'RECOVEREE_WELLNESS_SELF_ASSESS_DATE': '',
    'SERVICES_INITIATED': '',
    'TOTAL_CHILDREN': random.number(5),
    'TREATMENT_DISCHARGE': '',
    'TYPE_OF_TRANS': 0,
    'TestDelete': '',
    'USERNAME_ADD': 'jrbuser',
    'USERNAME_UPD': 'jrbuser',
    'archived': false,
    'id': id
  })
}

module.exports = {
  'seeder': seeder,
  'indexes': [
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
  'compoundIndexes': [],
  'table': 'TBL_RECOVEREES'
}
