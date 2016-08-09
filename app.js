var http = require('http');

var final = require('./finalResult.js');

http.createServer(function (req, res) {
  res.writeHead(200);

  res.write(final.acctBal());
  res.write(final.finalNumber() + '\n');

  res.end();
}).listen(3000);

console.log('Listening on port 3000');
