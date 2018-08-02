/**
 * Migrate table up. Add to DB.
 * @param r
 * @param connection
 * @param data
 * @returns {*}
 */

const resolver = require('./helpers/resolver')

async function up (r, connection, data) {
  const query = await r.tableCreate(data.table)
    .run(connection)
  await tableInserter(r, data, connection)
  resolver.resolveIt(query)
}

async function tableInserter (r, data, connection) {
  const query = await r.table(data.table)
    .insert(data.seeder)
    .run(connection)
  resolver.resolveIt(query)
  await indexCreate(r, data, connection)
  // await compoundIndexCreate(r, data, connection)
}

async function indexCreate (r, data, connection) {
  if (data.indexes.length > 0) {
    data.indexes.forEach(async (index) => {
      const query = await r.table(data.table)
        .indexCreate(index)
        .run(connection)
      resolver.resolveIt(query)
    })
  }
}

async function compoundIndexCreate (r, data, connection) {
  if (data.compoundIndexes.length > 0) {
    data.indexes.forEach((index) => {
      data.compoundIndexes.forEach(async (compoundIndex) => {
        let compoundArray = []
        console.log(index)

        compoundIndex.indexes.forEach((index) => {
          compoundArray.push(r.row(index))
        })

        const query = await r.table(data.table)
          .indexCreate(compoundIndex.name, compoundArray)
          .run(connection)
        resolver.resolveIt(query)
      })
    })
  }
}

/**
 * Migrate table down. Remove from db completely.
 * @param r
 * @param connection
 * @param data
 * @returns {*}
 */
async function down (r, connection, data) {
  const query = await r.tableDrop(data.table)
    .run(connection)
  resolver.resolveIt(query)
}

module.exports = { up, down }
