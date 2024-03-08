import http from "http";
import { readFileSync } from "fs";
import { dirname, join, resolve } from "path";

// console.log(resolve("..", "test.html"));
// console.log(resolve(import.meta.dirname, "..", "test.html"));  //絕對路徑  方便抓檔案
// console.log(join("..", "test.html"));  // 僅會將字串組合成路徑

// 讀取外部檔案，回應給瀏覽器
const server = http.createServer((request, response) => {
// const filePath = resolve(__dirname, "test.html");
const filePath = resolve(import.meta.dirname, "test.html");
const htmlContent = readFileSync(filePath);
// console.log(htmlContent.toString());
    response.setHeader("content-type", "text/html;charset=utf-8")
    response.end(htmlContent)
})
server.listen(9000, () => {
    console.log("伺服器已啟動於 http://localhost:9000");
}
)
