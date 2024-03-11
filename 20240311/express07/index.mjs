import express from "express";
import moment from "moment";
import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname;

const app = express();

app.get("/", (req, res) => {
    const { ip, path } = req;
    console.log(moment().format("YYYY-MM-DDTHH:mm:ss"));
    //  hh 12小時制  HH 24小時制
    console.log(ip);
    console.log(path);
    const accessLog = ``;
    fs.appendFile(path.resolve(__dirname, "access.log"));
    res.send("網站首頁")

});


app.listen(3000, () => {
    console.log("伺服器已啟動於 http://localhost:3000");
})