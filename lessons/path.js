const { parse } = require('path');
const path = require('path');

// console.log('Склеить участки пути', path.join(__dirname, 'first', 'second', 'third'));
// console.log('Получить абсолютный путь', path.resolve('first', 'second', 'third'));
const fullPath = path.resolve('first', 'second', 'third.js');
console.log('Парсинг пути', path.parse(fullPath));



// -----------------------

const siteURL = 'http://localhost:8000/users?id=5123';

const url = new URL(siteURL);
console.log(url)