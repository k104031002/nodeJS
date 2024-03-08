import http from "http";



const server = http.createServer((request, response) => {

    response.setHeader("content-type", "text/html;charset=utf-8")

    response.statusCode = 200;
    response.statusMessage="no page"; // 不建議更動預設的訊息文字
    response.setHeader("Server","Wun's Server")
    response.write("test 1 <br>")
    response.write("test 3 <br>")
    response.write("test 5 <br>")
    response.write("test 7 <br>")
    response.write("test 9 <br>")
    response.end("<h1>你好呀~主機!</h1>")
})

server.listen(9000, () => {
    console.log("伺服器已啟動於 http://localhost:9000");
}
)
