import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8")
    res.end("網站主頁");
})

app.get("/login", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8")
    res.end("登錄頁面");
})

app.post("/login", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8")
    res.end("進入登錄的流程");
})

app.all("/test", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8")
    res.end("進入TEST");
})

// 要保持在最後  不然會衝突前面的路徑規則
app.all("*", (req, res) => {
    // res.setHeader("content-type", "text/html;charset=utf-8")
    res.send("歡迎光臨 MY HOME");
    // end + setHeader = send
})

app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
})