const r = require('rethinkdb')
const moment = require('moment')
const tables = require('../../configuration/tables-config')

module.exports = {
  isoDateFormatTimeCreate() {
    return r.ISO8601(moment(new Date()).format('YYYY-MM-DD') + 'T08:00:00.000Z')
  },
  date() {
    let date = new Date()
    date.setDate(date.getDate() - Math.floor(Math.random() * 365) + 1)
    return r.ISO8601(moment(date).format('YYYY-MM-DD') + 'T08:00:00.000Z')
  },
  phoneNumber(){
    return Math.floor(Math.random() * 9000000000) + 1000000000
  },
  arrayOfNumbers(max){
    let array = []
    let randomNumber = Math.floor(Math.random() * max) + 1
    for(let i = 0; i < randomNumber; i++){
      array.push( Math.floor(Math.random() * max) + 1)
    }
    let numbersArray = Array.from(new Set(array));
    return numbersArray
  },
  number(max = 0){
    return (max === 0) ? Math.floor(Math.random() * Math.floor(2)) : Math.floor(Math.random() * max) + 1
  },
  personType(attribute){
    let trainersArray = []
    let trainers = Math.floor(tables.tbl_recoverees.total / attribute)
    for(let i =1; i <= trainers; i++){
      trainersArray.push(i * attribute)
    }
    let randomTrainer = trainersArray[Math.floor(Math.random() * trainersArray.length)]
    return randomTrainer
  }
}
