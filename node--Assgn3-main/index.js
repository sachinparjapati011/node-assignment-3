const fs=require("fs");
const http=require("http");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.readFile("./index.html","utf-8",(err,data)=>{
       if(err){
        res.writeHead(404);
        res.write("file not found");
       }
       else{
        
        res.write(data);
       }
       res.end();
    })

});
server.listen(5000,()=>{
    console.log("listening on port 5000")
})
