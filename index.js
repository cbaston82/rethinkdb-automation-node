const fs = require('fs')

// custom imports
const automateConfig = require('./configuration/automate-config')
const automateTable = require('./automate-table')

function gatherDirectoriesToAutomate () {
// Get automation settings
  automateConfig.settings.directories.forEach(settings => {

    // Gather all the files (tables that will be automate)
    if (settings.automate === true) {
      gatherDirectoryFiles(settings.directory, settings.exclude)
    }
  })
}

function gatherDirectoryFiles(directory, exclude) {
  const directoryWithFilesArray = {
    directory: directory,
    tables: []
  }
  fs.readdir(directory, (err, tables) => {
    tables.forEach(table => {
      if (exclude.indexOf(table) === -1 && !table.includes('.json')) {
       directoryWithFilesArray.tables.push(table)
      }
    });
    directoryFilesToBeSeeded(directoryWithFilesArray)
  })
}

function directoryFilesToBeSeeded (dataToSeed) {
  // console.log(dataToSeed.directory)
  // console.log(dataToSeed.tables)

  dataToSeed.tables.forEach((table) => {
    console.log('====================================================')
    automateTable.automate(require(`${dataToSeed.directory}/${table}`))
  })
}

gatherDirectoriesToAutomate()
