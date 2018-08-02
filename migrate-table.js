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
  await tableInsertIt(r, data, connection)
  resolver.resolveIt(query)
}

async function tableInsertIt (r, data, connection) {
  const query = await r.table(data.table)
    .insert(data.seeder)
    .run(connection)
  resolver.resolveIt(query)
  await indexArrayBuilder(r, data, connection)
  await compoundIndexCreate(r, data, connection)
}

async function createIndex (r, data, index, connection) {
  if (Object.keys(index).length === 1) {
    const query = await r.table(data)
      .indexCreate(index.name)
      .run(connection)
    resolver.resolveIt(query)
  } else {
    const query = await r.table(data)
      .indexCreate(index.name, index.arr)
      .run(connection)
    resolver.resolveIt(query)
  }
}

async function indexArrayBuilder (r, data, connection) {
  if (data.indexes.length > 0) {
    data.indexes.forEach(async (index) => {
      await createIndex(r, data.table, { name: index }, connection)
    })
  }
}

async function compoundIndexCreate (r, data, connection) {
  if (data.compoundIndexes.length > 0) {
    data.compoundIndexes.forEach(async (compoundIndex) => {
      let compoundArray = []

      compoundIndex.indexes.forEach((index) => {
        compoundArray.push(r.row(index))
      })

      await createIndex(r, data.table,
        { name: compoundIndex.name, arr: compoundArray }, connection)
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
