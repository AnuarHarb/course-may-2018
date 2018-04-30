const http = require('http');
const chalk = require('chalk');
const yargs = require('yargs');

const serve = (env = 'qa') => {
    http.createServer((request, response) => {

        const fs = require('fs');

        const environtmentFileName = `env/${env}.json`;

        let template = fs.readFileSync('template.tpl', 'utf8');

        let variables = '';

        try {
            variables = JSON.parse(fs.readFileSync(environtmentFileName, 'utf8'));
        } catch (error) {
            throw Error('Does not exist ' + environtmentFileName);
        }

        for (const variable in variables) {
            template = template.replace(`<<${variable}>>`, variables[variable]);
        }

        fs.writeFile('file.html', template, (error) => {
            if (error) {
                throw error;
            }
            console.log(chalk.green('The file was created'));
        });

        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('Process finished success');

    }).listen(8080);
};

yargs
    .command('serve [env]', 'start the server', (yargs) => {
        yargs
            .positional('env', {
                describe: 'environment to bind on',
                default: 'qa'
            })
    }, (argv) => {
        serve(argv.env);
    })
    .argv;
