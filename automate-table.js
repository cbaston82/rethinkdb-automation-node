const async = require('async');
const r = require('rethinkdb');
const config = require(__dirname + '/configuration/config.js');

/**
 * Create a asynchronous stream of functions
 * 1. Create connection
 * 2. Create Database if does not exists
 * 3. Create table if does not exists
 * 4. Seed the documents into the table - also seeding id to tie everything
 * 5. If no errors another asynchronous stream of functions creates the indexes
 * TODO: Need to eventually refactor the flow of this process.
 * * @param data
 */
let automate = function (data) {
  async.waterfall([
      function connect(callback) {
        r.connect(config.rethinkdb, callback)
      },
      function createDatabase(connection, callback) {
        //Create the database if needed.
        r.dbList().contains(config.rethinkdb.db).do(containsDb => {
          return r.branch(
            containsDb, {
              created: 0
            },
            r.dbCreate(config.rethinkdb.db)
          );
        }).run(connection, (err) => {
          console.log('Connection created successfully.')
          callback(err, connection)
        });
      },
      function createTable(connection, callback) {
        //Create the table if needed.
        r.tableList().contains(data.table).do(containsTable => {
          return r.branch(
            containsTable, {
              created: 0
            },
            r.tableCreate(data.table)
          );
        }).run(connection, (err) => {
          console.log(`${data.table} table created successfully.`)
          callback(err, connection);
        });
      },
      function creatDocument(connection, callback) {
        // Seed data into table.
        r.table(data.table).insert(data.seeder).run(connection, (err) => {
          console.log(`${data.table} table documents seeded successfully.`)
          callback(err, connection);
        });
      }
    ],
    (err, connection) => {
      if (err) {
        console.error(err);
        process.exit(1);
        return;
      }

      // Create the indexes if they are defined in the table.js
      if (typeof data.indexes !== 'undefined') {
        data.indexes.forEach((index) => {
          async.waterfall([
            function connect(callback) {
              r.connect(config.rethinkdb, callback);
            },
            function createIndex(connection, callback) {
              //Create the index if needed.
              r.table(data.table).indexList().contains(index).do(hasIndex => {
                return r.branch(
                  hasIndex, {
                    created: 0
                  },
                  r.table(data.table).indexCreate(index)
                );
              }).run(connection, (err) => {
                console.log(`${index} index added to ${data.table}`)
                callback(err, connection);
              });
            },
            function waitForIndex(connection, callback) {
              //Wait for the index to be ready.
              r.table(data.table).indexWait(index).run(connection, (err, result) => {
                console.log(`${index} index on ${data.table} table now ready.`)
                callback(err, connection);
              });
            },
          ], (err, connection) => {
            if (err) {
              console.error(err);
              process.exit(1);
              return;
            }
            // Do something else if no error (Optional)
          })
        })
      }

      // Create the compound index if they are defined in the table.js file
      if (typeof data.compoundIndexes !== "undefined") {
        data.compoundIndexes.forEach((compoundIndex) => {
          async.waterfall([
            function connect(callback) {
              r.connect(config.rethinkdb, callback);
            },
            function createCompoundIndex(connection, callback) {

              // Create the compound array
              var compoundArray = []
              compoundIndex.indexes.forEach((index) => {
                compoundArray.push(r.row(index))
              })

              r.table(data.table).indexCreate(compoundIndex.name, compoundArray)
                .run(connection, (err) => {
                  console.log(`index added to ${data.table}`)
                  callback(err, connection)
                })
            }
          ], (err, connection) => {
            if (err) {
              console.error();
              process.exit(1);
              return;
            }
            // Do something else if no error (Optional)
          })
        })
      }
    });
}

module.exports = {
  automate
}
