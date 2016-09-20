var gith = require('gith').create(9001);
var path = require('path');
var execFile = require('child_process').execFile;
var filePath = path.resolve('/home/napon/github-auto-deploy/', './pull-and-deploy.sh');

console.log('Listening on 9001..');

gith({
    repo: 'napon/napontaratan.com'
}).on('file:all', function(payload) {
    console.log('Received a payload. ' + new Date());
    execFile(filePath, ['/usr/share/nginx/', 'napontaratan.com'], function(error, stdout, stderr) {
	console.log('Started script.');
        console.log(stdout, error, stderr);
    });
    console.log('Done.');
});
