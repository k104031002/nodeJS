import express from "express"
import { resolve, extname } from "path"
import multer from "multer"
import { renameSync } from "fs"
import {rename} from "fs/promises"
const __dirname = import.meta.dirname
const app = express()

app.set("view engine", "ejs")
app.set("views", resolve(__dirname, "views"))

app.use("/bs", express.static(resolve(__dirname, "node_modules/bootstrap/dist")))
app.use("/jq", express.static(resolve(__dirname, "node_modules/jquery/dist")))

const upload = multer({ dest: resolve(__dirname, "public", "uploads") })


app.get("/", (req, res) => {
    res.send("首頁")
})

app.get("/form", (req, res) => {
    res.render("form1")
})

app.post("/upload1", upload.single("myFile"), (req, res) => {
    // res.send("處理檔案上傳")
    let timestamp = Date.now();
    //  new Date().getTime() 瀏覽器的JS的timestamp 寫法
    let newName = `${timestamp}${extname(req.file.originalname)}`
    renameSync(req.file.path, resolve(__dirname, "public", "uploads", newName))
    req.body.myFile = newName
    res.json({ body: req.body})
})


app.listen(3000, () => {
    console.log("服務已啟動於 http://localhost:3000")
})