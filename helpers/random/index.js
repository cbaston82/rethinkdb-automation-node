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
  },
  generateRandomNumberArray(number){
    let array = []
    let randomNumber = Math.floor(Math.random() * number) + 1
    for(let i = 0; i < randomNumber; i++){
      array.push( Math.floor(Math.random() * number) + 1)
    }
    let numbersArray = Array.from(new Set(array));
    return numbersArray
  }
}
