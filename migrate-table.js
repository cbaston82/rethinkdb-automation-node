/**
 * Migrate table up. Add to DB.
 * @param r
 * @param connection
 * @param data
 * @returns {*}
 */
function up(r, connection, data){
  return r.tableCreate(data.table).run(connection, (error, result) => {
    if (error) throw error

    // #2 insert data.
    r.table(data.table).insert(data.seeder).run(connection, (error, result) => {
      if (error) throw error

      // Create the indexes if they are defined.
      if(typeof data.indexes !== "undefined") {
        data.indexes.forEach((index) => {
          r.table(data.table).indexCreate(index).run(connection, (error, result) => {
            if (error) throw error
          })
        })
      }

      // Create the compound index if they are defined.
      if(typeof data.compoundIndexes !== "undefined") {
        data.compoundIndexes.forEach((compoundIndex) => {

          // Create the compound array
          let compoundArray = []

          compoundIndex.indexes.forEach((index) => {
            compoundArray.push(r.row(index))
          })

          r.table(data.table).indexCreate(compoundIndex.name, compoundArray)
            .run(connection, (error, results) => {
              if (error) throw error
            })
        })
      }
    })
  });
}

/**
 * Migrate table down. Remove from db completely.
 * @param r
 * @param connection
 * @param data
 * @returns {*}
 */
function down(r, connection, data){
  return r.tableDrop(data.table).run(connection);
}

module.exports = {up, down}
