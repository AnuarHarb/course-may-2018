(function(document) {
  'use strict';

const article = document.querySelector('#name-list');
const API_URL = 'datos.json';
let payload = {};
const map = new Map();

fetch(API_URL)
.then(response => response.json())
.then(response => {
  payload = response;
  render();
})
.catch(err => console.log('error en el proceso' + err))


const render = (lang = 'es') => {

  const dbLanguage = payload[lang];
  for (const row in dbLanguage) {
    const node = dbLanguage[row];
    map.set(node.key, node.value);
  }


  const title = document.querySelector('#title');
  title.innerText = map.get('title');
}

const changeLanguage = (lang) => {
  render(lang);
};

document.changeLanguage = changeLanguage;

})(document);
