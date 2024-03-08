import http from "http";

const server = http.createServer((request, response) => {
    response.setHeader("content-type", "text/html;charset=utf-8")
    response.end("Hello Server! 你好主機!!");
});

server.listen(9000, () => {
    console.log("伺服器已啟動於 http://localhost:9000");
})