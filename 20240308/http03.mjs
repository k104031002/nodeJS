import http from "http";

const server = http.createServer((request, response) => {
    // GET 不會有請求主體
    // 以目前而言，POST 送出 form 才會請求主體
    // 這個檔案只是在做觀察，將來會有更方便的方法取得請求主體
    let body = "";

    request.on("data", chunk => { 
        body += chunk;
    });

    request.on("end", (chunk) => {
        console.log(body);
        response.setHeader("content-type", "text/html;charset=utf-8")
        response.end("你好主機!!!")
    })


})

server.listen(9000, () => {
    console.log("伺服器已啟動於 http://localhost:9000");
}
)
