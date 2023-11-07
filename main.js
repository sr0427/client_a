// main.js

const fs = require('fs');
const dotenv = require('dotenv');
const { create } = require('./message');

dotenv.config();

const name = process.env.NAME;
const number = process.env.NUMBER;
const message = create(name, number);

fs.writeFile('result.txt', message, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('結果をresult.txtに書き込みました。');
  }
});
