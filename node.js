const http = require('http');
const axios = require('axios');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    try{
        axios.get('https://api.github.com/repos/nodejs/node' )
            .then(function(response){
                const {stargazers_count} = response.data;
                const {forks_count} = response.data;
                const {open_issues_count} = response.data;
                res.end(`Stargazers: ${stargazers_count}\nForks: ${forks_count}\nOpen Issues: ${open_issues_count}`);
            })
    }catch(e){
        res.statusCode = 500;
        res.end('Internal error issued');
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});