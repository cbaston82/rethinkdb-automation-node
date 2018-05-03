const fs = require('fs')

// custom imports
const automateConfig = require('./configuration/automate-config')
const automateTable = require('./automate-table')

// Get automation settings
automateConfig.settings.directories.forEach(settings => {

  // Gather all the files (tables that will be automate)
  if(settings.automate === true){
    gatherTableFiles(settings.directory, settings.exclude)
  }
})

/**
 * Gathers all the files (e.g tables) that will be automated
 * @param directory
 * @param exclude
 */
function gatherTableFiles(directory, exclude){
  fs.readdir(directory, (err, files) => {
    files.forEach(file => {

      // This is where the MAGIC happens
      // Creates the db, tables, seeds data, creates indexes etc from filename.js
      if (exclude.indexOf(file) === -1 && file.includes('.js')){
        automateTable.automate(require(`${directory}/${file}`))
      }
    });
  })
}
