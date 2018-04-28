var http = require('http');

http.createServer(function (req, res) {

  var fs = require('fs');
  const env ="qa"

  var envFile=`env/${env}.json`;

  var template= fs.readFileSync('template.tpl', 'utf8');

  console.log(template);

  var variables = JSON.parse(fs.readFileSync(envFile, 'utf8'));


  for (variable in variables){
    template=template.replace(`<<${variable}>>`,variables[variable]);
  }

  fs.writeFile('archivo.html', template, (err) => {
    if (err) throw err;
    console.log('El archivo se creó');
  });

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Proceso terminado');

}).listen(8080);
