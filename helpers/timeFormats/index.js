const r = require('rethinkdb')
const moment = require('moment')

module.exports = {
  isoDateFormatTimeCreate() {
    return r.ISO8601(moment(new Date()).format('YYYY-MM-DD') + 'T08:00:00.000Z')
  }
}
