import http from "http";
import { parse } from "url";

const server = http.createServer((request, response) => {
// 傳統方法
// 由URL模組的parse 方法取得網址參數
// 更好的方法在http05

    const res = parse(request.url, true);
    if (res.pathname !== "/favicon.ico") {
        console.log(res);
        console.log(`res.query.name = ${res.query.name}`);
        console.log(`res.query.pwd = ${res.query.pwd}`);
    }

    response.setHeader("content-type", "text/html;charset=utf-8")
    response.end("你好主機!!!")
})

server.listen(9000, () => {
    console.log("伺服器已啟動於 http://localhost:9000");
}
)
