'use strict';
// use this syntax on termina for choose de env: node index.js --env=enviroment
const args = require('yargs').argv;

switch (args.env) {
  case 'dev':
    console.log('entorno de desarrollo')
    break;
  case 'qa':
    console.log('entorno QA')
    break;
  case 'prod':
    console.log('entorno de produccion')
    break;
  default:
    console.log('no se eligio un env válido')

}



//console.log('enviroment: ' + args.env);
