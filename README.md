# FFR BE AUTOMATION

### Current dependencies - package.json
```json
{
  "dependencies": {
    "async": "^2.6.0",
    "cli-table": "^0.3.1",
    "express": "^4.16.3",
    "faker": "^4.1.0",
    "install": "^0.11.0",
    "moment": "^2.22.1",
    "npm": "^6.0.0",
    "rethinkdb": "^2.3.3",
    "rethinkdb-createtables": "^1.0.1",
    "ssn": "^1.0.3"
  }
}
```

### Creating and seeding a table - ** Lets use client_notes as an example **

- Lets look at the client_notes.js file in ** tables/clientinfo/client_ntoes.sj **

```javascript
const faker = require('faker')
const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []
let recId = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.client_notes.total; i++){

  // Many to one ids.
  if(recId > tables.tbl_recoverees.total) recId = 1

  seeder.push({
    "ID":  recId,
    "NOTE":  faker.random.words(10),
    "STAMP":  random.date()
  })
  recId++
}

module.exports = {
  "seeder" : seeder,
  "indexes" : ['ID', 'STAMP'],
  "compoundIndexes" : [],
  "table" : 'CLIENT_NOTES'
}

```
