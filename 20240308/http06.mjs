import http from "http";
import path from "path";


const server = http.createServer((request, response) => {
    const { method, url } = request;
    const { pathname } = new URL(url, "http://localhost");
    // if (pathname !== "/favicon.ico") {
    //     console.log(`method = ${method}`);
    //     console.log(`url = ${url}`);
    // }
    response.setHeader("content-type", "text/html;charset=utf-8")
    if (method === "GET" && pathname === "/login") {
        response.end("你好,登入頁")
    } else if (method === "GET" && pathname === "/reg") { 
        response.end("你好,註冊頁")
    }else{
        response.end("你好主機!!!")
    }
    
})

server.listen(9000, () => {
    console.log("伺服器已啟動於 http://localhost:9000");
}
)
