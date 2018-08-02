const settings = {
  "directories": [{
      "directory": "./tables/billing",
      "automate": true,
      "exclude": []
    },
    {
      "directory": "./tables/clientinfo",
      "automate": true,
      "exclude": ['tbl_participation_influences.js']
    },
    {
      "directory": "./tables/coaching",
      "automate": false,
      "exclude": []
    },
    {
      "directory": "./tables/contacts",
      "automate": true,
      "exclude": []
    },
    {
      "directory": "./tables/demographics",
      "automate": true,
      "exclude": []
    },
    {
      "directory": "./tables/employment",
      "automate": true,
      "exclude": []
    },
    {
      "directory": "./tables/ffr",
      "automate": true,
      "exclude": []
    },
    {
      "directory": "./tables/medical",
      "automate": false,
      "exclude": []
    },
    {
      "directory": "./tables/person",
      "automate": true,
      "exclude": []
    },
    {
      "directory": "./tables/program",
      "automate": true,
      "exclude": []
    },
    {
      "directory": "./tables/surveys",
      "automate": true,
      "exclude": []
    },
    {
      "directory": "./tables/system",
      "automate": true,
      "exclude": []
    },
    {
      "directory": "./tables/training",
      "automate": true,
      "exclude": []
    }
  ]
}

module.exports = {
  settings
}
