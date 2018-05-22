const r = require('rethinkdb')
const moment = require('moment')
const tables = require('../../configuration/tables-config')

/**
 * Return date in ISO Format.
 * @returns {*}
 */
function isoDateFormatTimeCreate() {
  return r.ISO8601(moment(new Date()).format('YYYY-MM-DD') + 'T08:00:00.000Z')
}

/**
 * Returns random date within a year.
 * @returns {*}
 */
function date() {
  let date = new Date()
  date.setDate(date.getDate() - Math.floor(Math.random() * 365) + 1)
  return r.ISO8601(moment(date).format('YYYY-MM-DD') + 'T08:00:00.000Z')
}

/**
 * Returns a random 10 digit number. used for creating a fake phone number.
 * @returns {number}
 */
function phoneNumber(){
  return Math.floor(Math.random() * 9000000000) + 1000000000
}

/**
 * Return a random array of numbers.
 * @param max
 * @returns {any[]}
 */
function arrayOfNumbers(max){
  let array = []
  let randomNumber = Math.floor(Math.random() * max) + 1
  for(let i = 0; i < randomNumber; i++){
    array.push( Math.floor(Math.random() * max) + 1)
  }
  let numbersArray = Array.from(new Set(array));
  return numbersArray
}

/**
 * Returns a random number within given max. If max is not given will return 1 or 0.
 * @param max
 * @returns {number}
 */
function number(max = 0){
  return (max === 0) ? Math.floor(Math.random() * Math.floor(2)) : Math.floor(Math.random() * max) + 1
}

/**
 * Returns a random person by its attribute.
 * @param attribute
 * @returns {*}
 */
function personType(attribute){
  let trainersArray = []
  let trainers = Math.floor(tables.tbl_recoverees.total / attribute)
  for(let i =1; i <= trainers; i++){
    trainersArray.push(i * attribute)
  }
  let randomTrainer = trainersArray[Math.floor(Math.random() * trainersArray.length)]
  return randomTrainer
}

module.exports = {
  isoDateFormatTimeCreate,
  date,
  phoneNumber,
  arrayOfNumbers,
  number,
  personType
}
