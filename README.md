# FFR BE AUTOMATION
This project is meant to automate the process of creating the database, tables, indexes, compound indexes and generating fake data to work with.

## Getting Started
- Install dependencies `npm install or yarn install`

---

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

### Adding a new tables directory

---

- Create new directory in `tables/DIRECTORY_NAME`
- Update **configuration/automate-config.js `directories[]`**
- Set `"automate": true` automate that directory or `"automate": false` to skip it
- Prevent automation on any file in the directory `"exclude": ['file1.js', 'file2.js']`

```json
{
  "directory" : "./tables/DIRECTORY_NAME",
  "automate" :  true, 
  "exclude" : []
}
```

### Create a basic table

---

- Lets look at the `client_notes.js` file in **tables/clientinfo/client_notes.sj**
- We are creating `8` documents. This number is set in **configuration/tables-config.js `client_notes{}`**"
- There can be many notes to one recoveree. So we make sure the max ID does not exceed the number of recoverees. This apply's to all many to ones.

```javascript
const faker = require('faker') // https://github.com/Marak/Faker.js.
const random = require('../../helpers/random/index')
const tables = require('../../configuration/tables-config') 

// Seed data.
const seeder = []

// Since this table has a relation of many notes to one recovery
// we need to set recId to 1
let recId = 1

// create seed data - total is set in tables-config.
for(let i = 1; i <= tables.client_notes.total; i++){

  // Many to one ids. Making sure that ID does not go pass the number of recoverees.
  if(recId > tables.tbl_recoverees.total) recId = 1

  // Loop and create data to seed.
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

- Notice that **configuration/tables-config.js `client_notes{}`** has a total.

```json 
  "client_notes": {
    "total" 8
  }
```

### Create a basic options table

---

- Lets look at the `tbl_family.js` file in **tables/demographics/tbl_family.js**
- We are looping through **configuration/tables-config.js `tbl_family.types[]`**
- Types are set in **configuration/tables-config.js `tbl_family.types[]`** so that we use the data throughout the automation process.

```javascript
const tables = require('../../configuration/tables-config')

// Seed data.
const seeder = []

// create seed data.
tables.tbl_family.types.forEach((type, i) => {
  seeder.push( {
    "FAMILY":  type,
    "ID": i + 1,
    "SORT_SEQUENCE": null // Todo: remove if not needed.
  })
})

module.exports = {
  "seeder" :seeder,
  "indexes" : ['ID'],
  "compoundIndexes" : [],
  "table" : "TBL_FAMILY"
}

```

- Notice that  **configuration/tables-config.js `tbl_family{}`** has a `types[]` array.

```json 
  "tbl_family": {
      "types": [
        "Have children",
        "With DCF"
      ]
  }
```
