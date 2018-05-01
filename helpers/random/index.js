const r = require('rethinkdb')
const moment = require('moment')

module.exports = {
  isoDateFormatTimeCreate() {
    return r.ISO8601(moment(new Date()).format('YYYY-MM-DD') + 'T08:00:00.000Z')
  },
  isoRandomDateFormatTimeCreate() {
    date = new Date()
    date.setDate(date.getDate() - Math.floor(Math.random() * 365) + 1)
    return r.ISO8601(moment(date).format('YYYY-MM-DD') + 'T08:00:00.000Z')
  },
  randomPhoneNubmer(){
    return Math.floor(Math.random() * 9000000000) + 1000000000
  }
}
