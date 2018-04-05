// compiles "on the fly" (whatever this means??)
require('babel-register');
// allows full ES2015 environment
require('babel-polyfill');

const fs = require('fs');
const path = require('path');
const env = require('dotenv');

// if .env file wasn't created, throw a console.log and exit
if (!fs.readFileSync(path.resolve(__dirname, '../.env'))) {
  console.log('.env configuration file must exist inside of the rest-server root');
  process.exit();
}

// loads correct .env (rest-server .env in this case)
env.config({
  path: path.resolve(__dirname, '../.env'),
});

// runs rest-server (/rest-server/src/index.js)
require('../src');
