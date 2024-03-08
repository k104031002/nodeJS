import http from "http";
import { readFileSync } from "fs";
import { dirname, join, resolve } from "path";


const server = http.createServer((request, response) => {
    const { pathname } = new URL(request.url, "http://localhost");

    let filePath, content;
    // console.log(request.url);
    // console.log(pathname);
    

    if (pathname === "/") {
        response.setHeader("content-type", "text/html;charset=utf-8")
        // 格式控制只需控制在html內
        filePath = resolve(import.meta.dirname, "test2.html");
        content = readFileSync(filePath);
        response.end(content)
    } else if (pathname === "/test2.css") {
        filePath = resolve(import.meta.dirname, "./test2.css");
        content = readFileSync(filePath);
        response.end(content)
    } else if (pathname === "/test2.js") {
        filePath = resolve(import.meta.dirname, "./test2.js");
        content = readFileSync(filePath);
        response.end(content)
    } else {
        response.end("<h1>讀不到檔案</h1>")
    }
});
server.listen(9000, () => {
    console.log("伺服器已啟動於 http://localhost:9000");
})
