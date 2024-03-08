import http from "http";
import { readFileSync } from "fs";
import { dirname, join, resolve, extname } from "path";

const mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}
// mimes.html
// mimes["html"]


const server = http.createServer((request, response) => {
    let content;
    let { pathname } = new URL(request.url, "http://localhost");
    if (pathname === "/") {
        pathname = "/index.html";
    }

    let root = "pages"
    if (process.argv[2] === "p") {
        root = "public";
    }

    let filePath = resolve(import.meta.dirname, root, pathname.slice(1));
    const ext = extname(filePath).slice(1).toLowerCase();
    const type = mimes[ext]
    console.log(type);

    if(type){
        if(ext === "html"){
            response.setHeader("content-type", type+";charset=utf-8");
        }else{
            response.setHeader("content-type", type);
        }
    }else{
        response.setHeader("content-type", "application/octet-stream");
    }

    

    try {
        content = readFileSync(filePath);
        response.end(content)
    } catch (error) {
        response.setHeader("content-type", "text/html;charset=utf-8")
        response.statusCode = 500;
        response.end("<h1>讀不到檔案</h1>")
    }
    // console.log(pathname);
});
server.listen(9000, () => {
    console.log("伺服器已啟動於 http://localhost:9000");
})
