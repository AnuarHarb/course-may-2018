'use strict';

const http = require('http');
const chalk = require('chalk');

let environment = 'dev';

if (process.argv.length == 3) {
    environment = process.argv[2];
} else {
    console.log(chalk.yellow('Use node index.js dev | qa | prod'));
}

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    const fs = require('fs');

    //1. Read template
    fs.readFile('template.tpl', 'utf8', (error, dataTemplate) => {
        if (error) {
            throw error;
        }

        //2. Read json file
        let jsonData = {};

        try {
            const jsonFilename = './env/' + environment + '.json';
            const data = fs.readFileSync(jsonFilename, 'utf8');
            jsonData = JSON.parse(data);

        } catch (error) {
            console.log(chalk.red('Error:', error.stack));
        }

        //3. Replace placeholders
        let outputData = dataTemplate;
        outputData = outputData.replace("<<environment>>", jsonData.environment);
        outputData = outputData.replace("<<server>>", jsonData.server);
        outputData = outputData.replace("<<port>>", jsonData.port);

        //4. Write file
        const outputFilename = `output.${environment}.txt`;
        let arch = fs.createWriteStream(outputFilename, {
            // 'a' means appending (old data will be preserved)
            flags: 'a'
        });
        // append string to your file
        arch.write(outputData);
        arch.end();

    });

    // Send the response body as "Hello World"
    response.write('<h2>Respuesta desde el server Hello World </h2><br/>');
    response.write('<br/>');
    response.end();
}).listen(8081);

const printDataJsonFile = (data) => {
    console.log(chalk.blue('Environment: ' + data.environment));
    console.log(chalk.blue('Server: ' + data.server));
    console.log(chalk.blue('Port: ' + data.port));
}

// Console will print the message
console.log(chalk.blue('Server running at http://127.0.0.1:8081/'));
