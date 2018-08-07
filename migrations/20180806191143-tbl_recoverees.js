const migrate = require('../migrate-table')
const resolver = require('../helpers/resolver')
const faker = require('faker')
const random = require('../helpers/random/index')

// Get automation configurations for this file.
const config = require('../configuration/automate-config').clientinfoConfig

// Get any data needed for use in seeder.
const clientinfo = require('../data/clientinfo.json')
const demographics = require('../data/demographics.json')
const medical = require('../data/medical.json')

// Initial state of seeder data.
const seeder = []
const profileImages = ['businessman.jpg', 'businesswoman.jpg']

// create seed data - total is set in tables-config
for (let i = 0; i < clientinfo.tbl_recoverees.total; i++) {

  let id = clientinfo.tbl_recoverees.id
  id = (i.toString().length < 2) ? id += '0' + i : id += i

  // Might seem like overkill. Doing this so dates make sense.
  let SERVICES_INITIATED = new Date();
  SERVICES_INITIATED.setDate(SERVICES_INITIATED.getDate() - random.number(365))

  let RECOVEREE_CASE_CLOSED = new Date(SERVICES_INITIATED)
  RECOVEREE_CASE_CLOSED.setDate(RECOVEREE_CASE_CLOSED.getDate() + 7)

  let TREATMENT_DISCHARGE = new Date(RECOVEREE_CASE_CLOSED)
  TREATMENT_DISCHARGE.setDate(TREATMENT_DISCHARGE.getDate() + 7)

  let surveyDate = new Date(SERVICES_INITIATED)
  surveyDate.setDate(surveyDate.getDate() + 2)

  seeder.push({
    'ALTERNATE_ID': '',
    'DATE_ADD': SERVICES_INITIATED,
    'DATE_UPD': SERVICES_INITIATED,
    'FIRST_DRUG': random.number(medical.tbl_drugs.types.length),
    'FirstDrugUsed': random.number(medical.tbl_drugs.types.length),
    'PICTURE': profileImages[Math.floor(Math.random() * profileImages.length)],
    'RECOVEREE_ARC_DATE': random.date(surveyDate),
    'RECOVEREE_ARC_SCORE': random.number(100),
    'RECOVEREE_ATTACHMENTS': '',
    'RECOVEREE_BDATE': random.date(),
    'RECOVEREE_CAPITAL_DATE': '',
    'RECOVEREE_CAPITAL_SCORE': 0,
    'RECOVEREE_CASE_CLOSED': random.date(surveyDate),
    'RECOVEREE_CASE_OPENED': "",
    'RECOVEREE_CERTIFICATION': [],
    'RECOVEREE_DATE_ADDED': random.date(),
    'RECOVEREE_DATE_UPDATED': random.date(),
    'RECOVEREE_EMAIL': faker.internet.email(),
    'RECOVEREE_GENDER': random.number(demographics.tbl_gender.types.length),
    'RECOVEREE_HOW_THEY_HEARD': random.number(demographics.tbl_how_they_heard.types.length),
    'RECOVEREE_ID': i + 1,
    'RECOVEREE_INACTIVE': false,
    'RECOVEREE_LANGUAGES': random.arrayOfNumbers(demographics.tbl_language.types.length),
    'RECOVEREE_LOCATION': 0,
    'RECOVEREE_MARITAL_STATUS': random.number(demographics.tbl_marital_status.types.length),
    'RECOVEREE_NAME': faker.name.firstName() + ' ' + faker.name.lastName(),
    'RECOVEREE_NOTES': faker.lorem.sentences(2),
    'RECOVEREE_PREFERRED_LANGUAGE': random.number(demographics.tbl_language.types.length),
    'RECOVEREE_QOL_DATE': random.date(surveyDate),
    'RECOVEREE_RACE': random.number(demographics.tbl_race.types.length),
    'RECOVEREE_REFERRED_BY_DATE': random.date(SERVICES_INITIATED),
    'RECOVEREE_REFERRED_BY_source': random.number(demographics.tbl_referral_source.types.length),
    'RECOVEREE_SCI_DATE': random.date(surveyDate),
    'RECOVEREE_SCI_SCORE': random.number(100),
    'RECOVEREE_SEX_ORIENT': '',
    'RECOVEREE_SSN': '000-00-0000',
    'RECOVEREE_TYPE': 0,
    'RECOVEREE_WELLNESS_SCORE': random.number(100),
    'RECOVEREE_WELLNESS_SELF_ASSESS_DATE': random.date(surveyDate),
    'SERVICES_INITIATED': random.date(SERVICES_INITIATED),
    'TOTAL_CHILDREN': random.number(5),
    'TREATMENT_DISCHARGE': random.date(TREATMENT_DISCHARGE),
    'TestDelete': '',
    'USERNAME_ADD': faker.internet.userName(),
    'USERNAME_UPD': faker.internet.userName(),
    'archived': false,
    'id': id
  })
}

// Data to be seeded to db.
const data = {
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
  ],
  'compoundIndexes': [],
  'table': 'TBL_RECOVEREES'
}

module.exports.up = async function (r, connection) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = await migrate.up(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}

module.exports.down = async function (r, connection) {
  if (config.automate && !config.exclude.includes(data.table)) {
    const promiseThing = await migrate.down(r, connection, data)
    resolver.resolveIt(promiseThing)
  }
}
