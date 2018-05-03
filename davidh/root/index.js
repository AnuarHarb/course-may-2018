'use strict';
/* Vars*/
// use this syntax on terminaL for choose de env: node index.js --env=enviroment
const args = require('yargs').argv;
const fs = require('fs');

/* Funtions */
// this is a synchronous function that obtains a json data of enviroment
const confEnv = (env) => {
  const enviroment = require(`./env/${env}.json`);
  let template;

  try {
    template = fs.readFileSync('template.txt', 'utf8'); // get template.txt
  } catch(error) {
    console.error( `Error: ${error}`);
  }
};

/* main program */
// switch the arg env of terminal for make the new output file
switch (args.env) {
  case 'dev':
    confEnv('dev');
    break;
  case 'qa':
    confEnv('qa');
    break;
  case 'prod':
    confEnv('prod');
    break;
  default:
    console.error('No se ha elegido un entorno válido');
}
