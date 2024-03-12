import express from "express";
import moment from "moment";
import fs from "fs";
import { resolve } from "path";


const __dirname = import.meta.dirname;

const app = express();

//  模組化---------------
const writeToLog = (req, res, next) => {
    const { ip, path } = req;
    const accessDate = moment().format("YYYY-MM-DDTHH:mm:ss");
    //  hh 12小時制  HH 24小時制
    console.log(ip);
    console.log(path);
    const accessLog = `${accessDate} ${ip} ${path} \r\n`;
    fs.appendFile(resolve(__dirname, "access.log"), accessLog, (error) => {
        if (error) {
            console.log("寫入失敗");
        }
    });
    next();
}

// 模組化-------------------

// error模組化--------------- 
const errorToLog = (req, res, next) => {
    const { ip, path } = req;
    const accessDate = moment().format("YYYY-MM-DDTHH:mm:ss");
    //  hh 12小時制  HH 24小時制
    console.log(ip);
    console.log(path);
    const accessLog = `${accessDate} ${ip} ${path} \r\n`;
    fs.appendFile(resolve(__dirname, "error.log"), accessLog, (error) => {
        if (error) {
            console.log("寫入失敗");
        }
    });
    next();
}
// error模組化---------------

// 預設登入才看得到
const checkLogin = (req, res, next) => {
    if (req.query.code === "464") {
        next()
    }else{
        res.send("請登入後再嘗試")
    }
}


app.use(writeToLog);

app.get("/", (req, res) => {
    // writeToLog(req);
    res.send("網站首頁")
});

app.get("/login", (req, res) => {
    // writeToLog(req);
    res.send("登入頁")
});

app.get("/about", (req, res) => {
    // writeToLog(req);
    res.send("關於我");
});


app.get("/admin", checkLogin, (req, res) => {
    // if (req.query.code === "464") {
    res.send("後臺首頁");
    // } else {
    // res.send("請登入後再嘗試")
    // }
});

app.get("/setting", checkLogin, (req, res) => {
    // if (req.query.code === "464") {
    res.send("設定頁");
    // } else {
    // res.send("請登入後再嘗試")
    // }
});

// errorToLog 讓錯誤的拜訪 回報在error.log檔內
app.all("*", errorToLog, (req, res) => {
    res.send("<h1>404 找不到唷  頁面</h1>")
})

app.listen(3000, () => {
    console.log("伺服器已啟動於 http://localhost:3000");
})