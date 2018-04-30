'use strict'
// use this syntax on termina for choose de env: node index.js --env=enviroment
const args = require('yargs').argv
const fs = require('fs');

// ************************************ funtions *********************************************
// this is a asynchronous function that obtains a json data of enviroment
const confEnv = (env) => {
  const enviroment = require(`./env/${env}.json`) // get json
  let template

  try {
    template = fs.readFileSync('template.txt', 'utf8') // get template.txt
  } catch(e) {
    console.log('Error:', e)
  }

  // Here must be the template.output.txt algoritmo generator
  console.log(enviroment)
  console.log(template)
}

//************************************** main program ****************************************
// switch the arg env of terminal for make the new output file
switch (args.env) {
  case 'dev':
    console.log('configurando entorno de desarrollo...')
    confEnv('dev')
    break;
  case 'qa':
    console.log('configurando entorno de QA...')
    confEnv('qa')
    break;
  case 'prod':
    console.log('configurando entorno de produccion...')
    confEnv('prod')
    break;
  default:
    console.log('no se eligió un entorno válido')
}
