var gith = require('gith').create(9001);
var execFile = require('child_process').execFile;

console.log('Listening on 9001..');

gith({
    repo: 'https://github.com/napon/github-auto-deploy.git'
}).on('all', function(payload) {
    if (payload.branch == 'master') {
        execFile('pull-and-deploy.sh', function(error, stdout, stderr) {
            console.log(stdout);
        });
    }
});
