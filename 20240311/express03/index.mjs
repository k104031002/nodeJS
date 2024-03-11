import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("網站首頁")
    // http 模組本來就有
    console.log(`req.method=${req.method}`);
    console.log(`req.url=${req.url}`);
    console.log(`req.httpVersion=${req.httpVersion}`);
    console.log(req.headers);
})

app.get("/login", (req, res) => {
    res.send("登入畫面");
    // express 才有
    console.log(`req.path =${req.path}`);
    console.log(req.path);
    console.log(`name =${req.query.name}`);
    console.log(`pwd =${req.query.pwd}`);
    console.log(`req.ip =${req.ip}`);
    // cookie 要有設定才會有值
    console.log(`cookie =${req.get("cookie")}`);
});

app.listen(3000,()=>{
    console.log("伺服器已啟動於 http://localhost:3000");
})