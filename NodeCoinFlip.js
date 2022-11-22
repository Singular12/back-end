const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {    
  const flipCoin = Math.random()*1;
  if (flipCoin<=0.50){
    res.write('Heads');
  } else {     
    res.write('Tails')
  }
  res.end();
  // fs.readFile('demofile.html', (err, data) => {
  //   res.writeHead(200, {'Content-Type': 'text/html'})
  //   res.write(data)
  //   res.end()
  // })
}).listen(8000)
