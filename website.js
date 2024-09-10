const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server  = http.createServer((req, res)=>{
    
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html'); 
        res.end(data.toString());
    }
    else if(req.url =='/cwh'){
        res.statusCode =200;
        res.end('<h1> This is CodeWithNATHAN</h1> <p> HEYYYY WELCOME TO MY SITE!</p>');
    }
    else if(req.url =='/about'){
        res.statusCode =200;
        res.end('<h1> About CodeWithNATHAN</h1> <p> Hey this is about CodeWithNATHAN!</p>');
    } 
    
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);

});
