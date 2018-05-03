# FFR Backend Automation 

This is a automation application for the FFR Backend System.

## Current dependencies - package.json

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

## Adding a table
1. Create the table to automate
```text
  ./tables/table_directory/table_name_as_in_db_lower_case.js
```

2. Create data ( e.g many notes to one recoveree )
```javascript
  const faker = require('faker')
  const random = require('../../helpers/random/index')
  const tables = require('../../configuration/tables-config')
  
  const seeder = []
  let recId = 1
  
  for(let i = 1; i <= tables.client_notes.total; i++){
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
