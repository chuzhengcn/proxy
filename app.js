var httpProxy = require('http-proxy')

var proxy = httpProxy.createProxy();

var options = {  
  'www.feiyesoft.com': 'http://127.0.0.1:9000'
}

proxy.on('error', function(error) {
    console.log(err)
})

require('http').createServer(function(req, res) {  
    proxy.web(req, res, {
        target: options[req.headers.host]
    });
}).listen(80);

console.log("proxy listen 80")