import express from "express";
import { resolve } from "path";
import jsonData from "./singers.json" assert{type: "json"};
const { singers } = jsonData;
// console.log(singers);

const app = express();

app.get("/", (req, res) => {
    res.send("網站首頁")

});
// http://localhost:3000/signer/3.html

app.get("/singer/:id.html", (req, res) => {
    const { id } = req.params;

    let result = singers.find(singer => parseInt(id) === singer.id);
    // ↑　簡寫　↓
    // let result = singers.find(singer=>{
    //     if(parseInt(id)===singer.id){
    //         return true;
    //     }
    // })

    // console.log(result);
    // res.send(`id=${req.params.id}`);
    // res.json(result)

    if (result) {
        res.status(200).send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${result.singer_name} Page</title>
        </head>
        <body>
            <h1>${result.singer_name}</h1>
            <img src="${result.singer_img}" alt="">
        
        </body>
        </html>`)
    } else {
        // http的方法
        // res.statusCode = 404;

        // express的方法
        // res.status(404);
        // res.set("Wun", "Server")
        // res.send("<h1>404 找不到葉面</h1>");
        // ↑　簡寫　↓ 
        res.status(404).set("Wun", "Server").send("<h1>404 找不到葉面</h1>")
    }
});

app.get("/api/singer/:id", (req, res) => {
    const { id } = req.params;

    let result = singers.find(singer => parseInt(id) === singer.id);

    if (result) {
        res.status(200).json(result)
    } else {
        res.status(404).json({ error: "找不到RR" })
    }
});

app.get("/netflix", (req, res) => {
    res.redirect("https://www.netflix.com/tw/");
});

app.get("/download", (req, res) => {
    res.download(resolve(import.meta.dirname, "singers.json", ""));
})


app.get("/content", (req, res) => {
    res.sendFile(resolve("test.html"));

});

app.listen(3000, () => {
    console.log("伺服器已啟動於 http://localhost:3000");
})