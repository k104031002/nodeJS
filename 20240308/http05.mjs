import http from "http";


const server = http.createServer((request, response) => {
    // 官方文件目前所推薦的方法
    // URL 物件所解析的網址參數
    const url = new URL(request.url, "http://locahost");
    if (url.pathname !== "/favicon.ico") {
        console.log(url);
        console.log(`name = ${url.searchParams.get("name")}`);
        console.log(`password = ${url.searchParams.get("pwd")}`);
    }

    response.setHeader("content-type", "text/html;charset=utf-8")
    response.end("你好主機!!!")
})

server.listen(9000, () => {
    console.log("伺服器已啟動於 http://localhost:9000");
}
)
