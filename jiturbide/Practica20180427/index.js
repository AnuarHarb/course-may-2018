/* Hello, World! program in node.js */
console.log("Mensaje desde la consola: Hello, World!");

var http = require("http");

for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}

var tipoEntorno = "dev";

if(process.argv.length == 3) {
    tipoEntorno = process.argv[2];
} else {
  console.log("Usar node index.js dev | qa | prod");
}

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/html'});

   var fs = require('fs');

   //1. Read template
   fs.readFile('template.tpl', 'utf8', function(err, dataTemplate) {
       if (err) throw err;
       //console.log(dataTemplate);

       //2. Read json file
       try {
           var jsonFilename = './env/' + tipoEntorno + '.json';
           var data = fs.readFileSync(jsonFilename, 'utf8');
           var jsonData = JSON.parse(data);
           //printDataJsonFile(jsonData);

       } catch(e) {
           console.log('Error:', e.stack);
       }

       //3. Replace placeholders
       var outputData = dataTemplate;
       outputData = outputData.replace("<<entorno>>", jsonData.entorno);
       outputData = outputData.replace("<<server>>", jsonData.server);
       outputData = outputData.replace("<<puerto>>", jsonData.puerto);
       console.log(outputData);

       //4. Write file
       var fsw = require('fs')
       var outputFilename = 'output.' + tipoEntorno + '.txt';
       var arch = fs.createWriteStream(outputFilename, {
          flags: 'a' // 'a' means appending (old data will be preserved)
        })
       arch.write(outputData) // append string to your file
       arch.end();

   });

   // Send the response body as "Hello World"
   response.write('<h2>Respuesta desde el server Hello World </h2><br/>');
   response.write("<br/>");
   response.end();
}).listen(8081);

function printDataJsonFile(data) {
  console.log("entorno: " + data.entorno);
  console.log("server: " + data.server);
  console.log("puerto: " + data.puerto);
}
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
