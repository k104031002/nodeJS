import http from "http";


const server = http.createServer((request, response)=>{
    // console.log(request.method);  // GET/POST/DELETE 等方法的字樣
    // console.log(request.url);  //路徑與網址參數
    // console.log(request.httpVersion); //抓版本   用不太到
    console.log(request.headers);
    response.setHeader("content-type", "text/html;charset=utf-8");
    response.end("你好,主機");
});

server.listen(9000,()=>{
    console.log("server is running at http://localhost:9000");
})