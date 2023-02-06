const http = require('http')

http.createServer((req,res)=>{
    res.write('<h1>Hello Node!!!!</h1>\n')
    res.end()
}).listen(3000, console.log('Server is running'))

